CREATE TABLE [dbo].[Features] (
    [Id]     INT            IDENTITY (1, 1) NOT NULL,
    [Value]  NVARCHAR (MAX) NULL,
    [NameId] INT            NULL,
    CONSTRAINT [PK_dbo.Features] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_dbo.Features_dbo.People_Person_Id] FOREIGN KEY ([NameId]) REFERENCES [dbo].[Names] ([Id])
);






GO
CREATE NONCLUSTERED INDEX [IX_Name_Id]
    ON [dbo].[Features]([NameId] ASC);



