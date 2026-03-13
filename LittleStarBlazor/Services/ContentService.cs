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
                new BranchInfo { Name = "Main Branch (Hirabaugh)", Address = "12/A, શ્રીરામનગર સોસાયટી, આદર્શ સોસાયટીની બાજુમાં, હિરાબાગ સર્કલ પાસે, હિરાબાગ ટુ જનતા રોડ", Phone = "+91 81560 50010", MapLink = "#", Badge = "Main Branch", ColorClass = "bcard-1" },
                new BranchInfo { Name = "Branch No. 2 (Nana Varachha)", Address = "110, કૃષ્ણકુંજ સોસાયટી, આશાદીપ સ્કુલ-1ની નજીક, સીમાડા નાકાની પાછળ, નાના વરાછા", Phone = "+91 95376 91700", MapLink = "#", Badge = "", ColorClass = "bcard-2" },
                new BranchInfo { Name = "Branch No. 3 (Utran)", Address = "101, ફર્સ્ટ સ્લોર, એન્જલ સ્ક્વેર, રોયલ સ્ક્વેરની બાજુમાં, સિલ્વર મેક્ઝિમાની સામે, વી.આઈ.પી. સર્કલ પાસે, ઉત્રાણ", Phone = "+91 95867 17500", MapLink = "#", Badge = "", ColorClass = "bcard-3" },
                new BranchInfo { Name = "Branch No. 4 (Sarthana)", Address = "1, રાધે ક્રિષ્ના સોસાયટી, સંકલ્પ રેસીડેન્સીની સામે, શ્યામધામ મંદિરની પાછળ, પરમહંસ સ્કૂલની સામે, સરથાણા જકાતનાકા આગળ", Phone = "+91 97268 33009", MapLink = "#", Badge = "", ColorClass = "bcard-4" }
            };
        }

        public List<GalleryItem> GetGalleryItems()
        {
            return new List<GalleryItem>
            {
                new GalleryItem { Title = "Admission 2026-27", Description = "Open for all branches", ImagePath = "assets/images/all_branches.jpg", IconClass = "fas fa-school", IsLarge = true },
                new GalleryItem { Title = "Main Branch", Description = "Hirabaugh Road", ImagePath = "assets/images/branch_main.jpg", IconClass = "fas fa-star", IsLarge = false },
                new GalleryItem { Title = "Nana Varachha", Description = "Branch No. 2", ImagePath = "assets/images/branch_2.jpg", IconClass = "fas fa-child", IsLarge = false },
                new GalleryItem { Title = "Utran", Description = "Branch No. 3", ImagePath = "assets/images/branch_3.jpg", IconClass = "fas fa-baby", IsLarge = false },
                new GalleryItem { Title = "Sarthana", Description = "Branch No. 4", ImagePath = "assets/images/branch_4.jpg", IconClass = "fas fa-university", IsLarge = false },
                new GalleryItem { Title = "Creative Colors", Description = "Exploring art and craft", ImagePath = "assets/images/nursery_gallery_activity.png", IconClass = "fas fa-palette", IsLarge = false },
                new GalleryItem { Title = "Outdoor Fun", Description = "Nurturing physical growth", ImagePath = "assets/images/nursery_gallery_playground.png", IconClass = "fas fa-tree", IsLarge = false },
                new GalleryItem { Title = "Little Star", Description = "Learning with joy", ImagePath = "assets/images/nursery_hero_vibrant.png", IconClass = "fas fa-heart", IsLarge = false }
            };
        }
    }
}
