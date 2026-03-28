using LittleStarMVC.Models;
using LittleStarMVC.Services;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace LittleStarMVC.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly ContentService _contentService;

        public HomeController(ILogger<HomeController> logger, ContentService contentService)
        {
            _logger = logger;
            _contentService = contentService;
        }

        public IActionResult Index()
        {
            ViewBag.Programs = _contentService.GetPrograms();
            ViewBag.Testimonials = _contentService.GetTestimonials();
            return View();
        }

        public IActionResult About()
        {
            return View();
        }

        public IActionResult Programs()
        {
            var programs = _contentService.GetPrograms();
            return View(programs);
        }

        public IActionResult Gallery()
        {
            var items = _contentService.GetGalleryItems();
            return View(items);
        }

        public IActionResult Branches()
        {
            var branches = _contentService.GetBranches();
            return View(branches);
        }

        public IActionResult Contact()
        {
            return View();
        }

        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Login(string username, string password)
        {
            if (username == "admin" && password == "admin@123")
            {
                // In a real app, we would set a cookie or session here.
                // For now, mirroring Blazor's simple navigation.
                return RedirectToAction("Dashboard");
            }

            ViewBag.ErrorMessage = "Invalid username or password. Please try again.";
            return View();
        }

        public IActionResult Dashboard()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
