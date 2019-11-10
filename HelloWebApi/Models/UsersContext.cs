using Microsoft.EntityFrameworkCore;
 
namespace HelloWebApi.Models
{
    public class UsersContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<Comment> Comments { get; set; }


        public UsersContext(DbContextOptions<UsersContext> options)
            : base(options)
        { }
    }
}