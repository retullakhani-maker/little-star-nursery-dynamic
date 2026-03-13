namespace LittleStarBlazor.Models
{
    public class ProgramInfo
    {
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string ImagePath { get; set; } = string.Empty;
        public string AgeRange { get; set; } = string.Empty;
        public string Duration { get; set; } = string.Empty;
        public string ColorClass { get; set; } = string.Empty; // e.g., pink, blue, yellow, green
        public string IconClass { get; set; } = string.Empty; // e.g., fas fa-baby
    }

    public class Testimonial
    {
        public string Quote { get; set; } = string.Empty;
        public string Author { get; set; } = string.Empty;
        public string ChildName { get; set; } = string.Empty;
        public string AvatarColor { get; set; } = string.Empty; // e.g., linear-gradient(...)
        public string Initials { get; set; } = string.Empty;
        public string CardColorClass { get; set; } = string.Empty; // e.g., tc-coral, tc-green
    }

    public class GalleryItem
    {
        public string ImagePath { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string IconClass { get; set; } = string.Empty;
        public bool IsLarge { get; set; }
    }

    public class BranchInfo
    {
        public string Name { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
        public string MapLink { get; set; } = string.Empty;
        public string Badge { get; set; } = string.Empty;
        public string ColorClass { get; set; } = string.Empty; // e.g., bcard-1, bcard-2
    }
}
