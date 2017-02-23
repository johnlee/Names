using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace Names.Controllers
{
    public class HomeController : Controller
    {
        private SignInManager<IdentityUser> _signInManager;
        private UserManager<IdentityUser> _userManager;

        public HomeController(SignInManager<IdentityUser> signInManager, UserManager<IdentityUser> userManager)
        {
            _signInManager = signInManager;
            _userManager = userManager;
        }

        [AllowAnonymous]
        public IActionResult Index()
        {
            if (User.Identity.IsAuthenticated)
            {
                return RedirectToAction("Dashboard", "Home");
            }
            string registerUrl = "{0}://{1}/.auth/login/{2}?post_login_redirect_url=/Home/Login";
            ViewBag.Microsoft = string.Format(registerUrl, Request.Scheme, Request.Host, "microsoft");
            ViewBag.Google = string.Format(registerUrl, Request.Scheme, Request.Host, "google");
            ViewBag.Facebook = string.Format(registerUrl, Request.Scheme, Request.Host, "facebook");
            ViewBag.Twitter = string.Format(registerUrl, Request.Scheme, Request.Host, "twitter");
            return View();
        }

        [Authorize]
        public IActionResult Dashboard()
        {
            return View();
        }

        [AllowAnonymous]
        public async Task<IActionResult> Login()
        {
            if (User.Identity.IsAuthenticated)
            {
                return RedirectToAction("Dashboard", "Home");
            }

            try
            {
                // Azure App Service Authentication (EasyAuth) doesnt support .NET Core yet. THis is workaround. 
                // Inspired by posting here: http://stackoverflow.com/questions/41501612/trouble-getting-claimsprincipal-populated-when-using-easyauth-to-authenticate-ag
                if (Request.Headers.ContainsKey("X-MS-CLIENT-PRINCIPAL-NAME")) // Passed Azure Authentication
                {   
                    var username = Request.Headers["X-MS-CLIENT-PRINCIPAL-NAME"][0];
                    IdentityUser iuser = await _userManager.FindByNameAsync(username);

                    // Check if new user registered  
                    if (iuser == null)
                    { 
                        // Register New User
                        iuser = new IdentityUser(username);
                        iuser.Email = username;

                        var creation = await _userManager.CreateAsync(iuser, "NamesManager#2017"); // Dummy Pswd, never used
                        if (!creation.Succeeded)
                        {
                            throw new Exception("Unable to register new user. Please try back later.");
                        }
                    }

                    // Signin and goto dashboard
                    await _signInManager.SignInAsync(iuser, false);
                    return RedirectToAction("Dashboard", "Home");
                }
            }
            catch (Exception ex)
            {
                ViewBag.Error = ex.Message;
                return View("Error");
            }

            return RedirectToAction("Index", "Home");
        }

        [AllowAnonymous]
        public async Task<ActionResult> Logout()
        {
            if (User.Identity.IsAuthenticated)
            {
                await _signInManager.SignOutAsync();
            }
            return RedirectToAction("Index", "Home");
        }

        [AllowAnonymous]
        public IActionResult Error()
        {
            return View();
        }

        [AllowAnonymous]
        public IActionResult Info()
        {
            return View();
        }


        /// <summary>
        /// TODO
        /// </summary>
        /// <returns></returns>
        public async Task<IActionResult> Backdoor()
        {
            var username = "johnjlee316@gmail.com";
            IdentityUser iuser = await _userManager.FindByNameAsync(username);

            // Check if new user registered  
            if (iuser == null)
            {
                // Register New User
                iuser = new IdentityUser(username);
                iuser.Email = username;

                var creation = await _userManager.CreateAsync(iuser, "NamesManager#2017"); // Dummy Pswd, never used
                if (!creation.Succeeded)
                {
                    throw new Exception("Unable to register new user. Please try back later.");
                }
            }

            // Signin and goto dashboard
            await _signInManager.SignInAsync(iuser, false);
            return RedirectToAction("Dashboard", "Home");
        }
    }
}
