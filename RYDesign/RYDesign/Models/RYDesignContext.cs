using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;

namespace RYDesign.Models
{
    [DbConfigurationType(typeof(MySql.Data.Entity.MySqlEFConfiguration))]
    public class RYDesignContext : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx

        public class MyConfiguration : DbMigrationsConfiguration<RYDesignContext>
        {
            public MyConfiguration()
            {
                this.AutomaticMigrationsEnabled = true;
            }

            protected override void Seed(RYDesignContext context)
            {
                var forums = new List<Forum>
                {
                    new Forum { ForumTitle = "Thank You", ForumAuthor = "Alexander", ForumCreatedOn = DateTime.Parse("2010-09-01") },
                    new Forum { ForumTitle = "Need help", ForumAuthor = "Alonso", ForumCreatedOn = DateTime.Parse("2012-10-02") },
                    new Forum { ForumTitle = "Release of Triple Bass X", ForumAuthor = "Employee - Bob", ForumCreatedOn = DateTime.Parse("2013-11-03") }
                };
                forums.ForEach(s => context.Forum.AddOrUpdate(p => p.ForumTitle, s));
                context.SaveChanges();

                var feedbacks = new List<Feedback>
                {
                    new Feedback {
                        ForumID = forums.Single(c => c.ForumTitle == "Thank You" ).ID,
                        ReplierComment = "Thank you very much for your help with finding the right speakers.",
                        ReplierName = "Alexander", DateWritten = DateTime.Parse("2010-09-01")
                    },
                    new Feedback {
                        ForumID = forums.Single(c => c.ForumTitle == "Thank You" ).ID,
                        ReplierComment = "You're welcome :D",
                        ReplierName = "Employee - Bill", DateWritten = DateTime.Parse("2010-09-30")
                    },
                    new Feedback {
                        ForumID = forums.Single(c => c.ForumTitle == "Need help" ).ID,
                        ReplierComment = "I need help with setting the bass speaker.",
                        ReplierName = "Alonso", DateWritten = DateTime.Parse("2012-10-02")
                    },
                    new Feedback {
                        ForumID = forums.Single(c => c.ForumTitle == "Release of Triple Bass X" ).ID,
                        ReplierComment = "We are proud to announce Triple Bass X to be released around the beginning of December :D",
                        ReplierName = "Employee - Bob", DateWritten = DateTime.Parse("2013-11-03")
                    }
                };

                foreach (Feedback f in feedbacks)
                {
                    var feedbackInDataBase = context.Feedback.Where(s => s.Forums.ID == f.ForumID).FirstOrDefault();
                    if (feedbackInDataBase == null)
                    {
                        context.Feedback.Add(f);
                    }
                }
                context.SaveChanges();
            }
        }

        public RYDesignContext() : base("name=RYDesignContext")
        {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<RYDesignContext, MyConfiguration>());
        }

        public System.Data.Entity.DbSet<RYDesign.Models.Feedback> Feedback { get; set; }

        public System.Data.Entity.DbSet<RYDesign.Models.Forum> Forum { get; set; }
    }
}
