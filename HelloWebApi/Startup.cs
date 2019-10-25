using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using HelloWebApi.Models;
 
namespace HelloWebApi
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            string con = "Server=(localdb)\\mssqllocaldb;Database=usersdbstore;Trusted_Connection=True;MultipleActiveResultSets=true";
            services.AddDbContext<UsersContext>(options => options.UseSqlServer(con));
            services.AddMvc(option => option.EnableEndpointRouting = false);
        }
         
        public void Configure(IApplicationBuilder app)
        {
            app.UseMvc();
            
        }
    }
}