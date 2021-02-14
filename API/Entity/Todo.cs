namespace API.Entity
{
    public class Todo
    {
        public int Id { get; set; }
        public int Category { get; set; } = 1; // 1 - undefined, 2 - school, 3 - personal, 4 - job
        public string Content { get; set; }
    }
}