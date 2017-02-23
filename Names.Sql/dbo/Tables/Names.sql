CREATE TABLE [dbo].[Names] (
    [Id]       INT            IDENTITY (1, 1) NOT NULL,
    [UserId]   VARCHAR (50)   NULL,
    [Modified] DATETIME       NOT NULL,
    [Created]  DATETIME       NOT NULL,
    [Value]    NVARCHAR (MAX) NULL,
    CONSTRAINT [PK_dbo.Names] PRIMARY KEY CLUSTERED ([Id] ASC)
);





