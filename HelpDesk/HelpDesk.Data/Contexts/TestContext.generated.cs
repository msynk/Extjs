using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using HelpDesk.Data.Mappings;
using HelpDesk.Models.Models;

namespace HelpDesk.Data.Contexts
{
  public partial class TestContext : DbContext
  {
    static TestContext()
    {
      Database.SetInitializer<TestContext>(null);
    }

    public TestContext()
      : base("Name=TestContext")
    {
    }

    public DbSet<User> Users { get; set; }

    protected override void OnModelCreating(DbModelBuilder modelBuilder)
    {
      modelBuilder.Configurations.Add(new UserMap());
    }
  }
}
