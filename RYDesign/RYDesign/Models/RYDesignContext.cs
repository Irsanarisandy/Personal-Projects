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
        }

        public RYDesignContext() : base("name=RYDesignContext")
        {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<RYDesignContext, MyConfiguration>());
        }

        public System.Data.Entity.DbSet<RYDesign.Models.Feedback> Feedback { get; set; }

        public System.Data.Entity.DbSet<RYDesign.Models.Forum> Forum { get; set; }
    }
}
