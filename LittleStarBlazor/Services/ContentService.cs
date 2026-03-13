using LittleStarBlazor.Models;

namespace LittleStarBlazor.Services
{
    public class ContentService
    {
        public List<ProgramInfo> GetPrograms()
        {
            return new List<ProgramInfo>
            {
                new ProgramInfo
                {
                    Title = "Bal Vatika",
                    Description = "A conducive environment for your child to learn, play, and grow with happy peers",
                    ImagePath = "assets/images/class-1.jpg",
                    AgeRange = "Under 3 Years",
                    Duration = "2.5 Hrs/Day",
                    ColorClass = "pink",
                    IconClass = "fas fa-baby"
                },
                new ProgramInfo
                {
                    Title = "Nursery",
                    Description = "Enhance your child's motor and social skills with a well-planned curriculum and fun activities",
                    ImagePath = "assets/images/class-2.jpg",
                    AgeRange = "3–4 Years",
                    Duration = "3 Hrs/Day",
                    ColorClass = "blue",
                    IconClass = "fas fa-seedling"
                },
                new ProgramInfo
                {
                    Title = "Jr. KG",
                    Description = "Let your child transition smoothly from infancy towards happy preschool years",
                    ImagePath = "assets/images/class-3.jpg",
                    AgeRange = "4–5 Years",
                    Duration = "4 Hrs/Day",
                    ColorClass = "yellow",
                    IconClass = "fas fa-paint-brush"
                },
                new ProgramInfo
                {
                    Title = "Sr. KG",
                    Description = "A place where creativity thrives. Let your child grow holistically with a well-rounded curriculum",
                    ImagePath = "assets/images/class-4.jpg",
                    AgeRange = "5–6 Years",
                    Duration = "4 Hrs/Day",
                    ColorClass = "green",
                    IconClass = "fas fa-star"
                }
            };
        }

        public List<Testimonial> GetTestimonials()
        {
            return new List<Testimonial>
            {
                new Testimonial
                {
                    Quote = "Little Star Nursery has been a second home for my daughter. The teachers are so caring and the environment is just perfect for learning through play!",
                    Author = "Anita Patel",
                    ChildName = "Mother of Diya Patel",
                    AvatarColor = "linear-gradient(135deg,#FF6B6B,#ee5a24)",
                    Initials = "AP",
                    CardColorClass = "tc-coral"
                },
                new Testimonial
                {
                    Quote = "I am amazed by the progress my son has made in his motor skills and social behavior. The bilingual education is a huge plus for us!",
                    Author = "Rajesh Shah",
                    ChildName = "Father of Kabir Shah",
                    AvatarColor = "linear-gradient(135deg,#22C55E,#16A34A)",
                    Initials = "RS",
                    CardColorClass = "tc-green"
                },
                new Testimonial
                {
                    Quote = "Safety was my biggest concern, but after seeing the CCTV setup and the trained staff, I feel completely at ease leaving my child here every day.",
                    Author = "Sneha Desai",
                    ChildName = "Mother of Aryan Desai",
                    AvatarColor = "linear-gradient(135deg,#3B82F6,#2563EB)",
                    Initials = "SD",
                    CardColorClass = "tc-blue"
                },
                new Testimonial
                {
                    Quote = "The structured curriculum and focus on creative play have truly helped our child bloom. Little Star is simply the best nursery in Surat!",
                    Author = "Meera Kapadia",
                    ChildName = "Mother of Reyansh",
                    AvatarColor = "linear-gradient(135deg,#A855F7,#7C3AED)",
                    Initials = "MK",
                    CardColorClass = "tc-purple"
                }
            };
        }

        public List<BranchInfo> GetBranches()
        {
            return new List<BranchInfo>
            {
                new BranchInfo { Name = "Hirabaugh", Address = "12/A, Shriramnagar Society, Near Hirabaugh Circle", Phone = "+91 90995 20954", MapLink = "#", Badge = "Main Branch", ColorClass = "bcard-1" },
                new BranchInfo { Name = "Nana Varachha", Address = "110, Krushnakunj Society, Near Aashadeep School-1", Phone = "+91 95376 91700", MapLink = "#", Badge = "", ColorClass = "bcard-2" },
                new BranchInfo { Name = "Sarthana", Address = "14, Akashardham Society, Sarthana Jakkatnaka", Phone = "+91 90816 60090", MapLink = "#", Badge = "", ColorClass = "bcard-3" },
                new BranchInfo { Name = "Shyamdham Mandir", Address = "1, RadheKrishna Society, Behind Shyamdham Mandir", Phone = "+91 97268 33009", MapLink = "#", Badge = "", ColorClass = "bcard-4" },
                new BranchInfo { Name = "Utran", Address = "101, First Floor, Angel Square, VIP Circle", Phone = "+91 95867 17500", MapLink = "#", Badge = "", ColorClass = "bcard-5" },
                new BranchInfo { Name = "Mota Varachha", Address = "1, Bhaktinandan Society, Mota Varachha", Phone = "+91 95861 18852", MapLink = "#", Badge = "", ColorClass = "bcard-6" }
            };
        }

        public List<GalleryItem> GetGalleryItems()
        {
            return new List<GalleryItem>
            {
                new GalleryItem { Title = "Creative Colors", Description = "Exploring art and craft", ImagePath = "assets/images/nursery_gallery_activity.png", IconClass = "fas fa-palette", IsLarge = true },
                new GalleryItem { Title = "Janmashtami Fest", Description = "Divine celebrations (Video)", ImagePath = "assets/images/class-1.jpg", IconClass = "fas fa-star", IsLarge = false },
                new GalleryItem { Title = "Annual Function", Description = "Shining on the stage", ImagePath = "assets/images/class-2.jpg", IconClass = "fas fa-graduation-cap", IsLarge = false },
                new GalleryItem { Title = "Little Scientists", Description = "Learning through experiments", ImagePath = "assets/images/class-3.jpg", IconClass = "fas fa-lightbulb", IsLarge = false },
                new GalleryItem { Title = "Navratri Garba", Description = "Traditional joy and dance", ImagePath = "assets/images/class-4.jpg", IconClass = "fas fa-star", IsLarge = false },
                new GalleryItem { Title = "Outdoor Fun", Description = "Nurturing physical growth (Video)", ImagePath = "assets/images/nursery_gallery_playground.png", IconClass = "fas fa-tree", IsLarge = false },
                new GalleryItem { Title = "Grandparents Day", Description = "Celebrating special bonds", ImagePath = "assets/images/littlestar.jpg", IconClass = "fas fa-heart", IsLarge = false },
                new GalleryItem { Title = "Diwali Celebration", Description = "Spreading lights and love (Video)", ImagePath = "assets/images/blog-1.jpg", IconClass = "fas fa-lightbulb", IsLarge = false }
            };
        }
    }
}
