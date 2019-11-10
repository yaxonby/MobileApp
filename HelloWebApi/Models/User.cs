namespace HelloWebApi.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public bool isAdmin { get; set; }
        public int PostId { get; set; }
    }
}