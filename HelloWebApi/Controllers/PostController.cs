using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using HelloWebApi.Models;
 
namespace HelloWebApi.Controllers
{
    [Route("api/[controller]")]
    public class PostController : Controller
    {
        UsersContext db;
        public PostController(UsersContext context)
        {
            this.db = context;
            if (!db.Posts.Any())
            {
               db.Posts.Add(new Post {
                   Header = "Post Header", 
                   Body = "Post Body",
                   CreatedDate = new DateTime(),
               });
                db.SaveChanges();
            }
        }
 
        [HttpGet]
        public IEnumerable<Post> Get()
        {
            return db.Posts.ToList();
        }
 
        // GET api/posts/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            Post post = db.Posts.FirstOrDefault(x => x.PostId == id);
            if (post == null)
                return NotFound();
            return new ObjectResult(post);
        }
 
        // POST api/posts
        [HttpPost]
        public IActionResult Post([FromBody]Post post)
        {
            if (post==null)
            {
                return BadRequest();
            }
 
            db.Posts.Add(post);
            db.SaveChanges();
            return Ok(post);
        }
 
        // PUT api/users/
        [HttpPut]
        public IActionResult Put([FromBody]Post post)
        {
            if (post==null)
            {
                return BadRequest();
            }
            if (!db.Posts.Any(x => x.PostId == post.PostId))
            {
                return NotFound();
            }
 
            db.Update(post);
            db.SaveChanges();
            return Ok(post);
        }
 
        // DELETE api/posts/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Post post = db.Posts.FirstOrDefault(x => x.PostId == id);
            if(post==null)
            {
                return NotFound();
            }
            db.Posts.Remove(post);
            db.SaveChanges();
            return Ok(post);
        }
    }
}