using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using LittleStarBlazor.Components;
using LittleStarBlazor.Services;

var builder = WebAssemblyHostBuilder.CreateDefault(args);

// In WASM, we add the root components explicitly
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<Microsoft.AspNetCore.Components.Web.HeadOutlet>("head::after");

// Add services as Scoped for WASM
builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });
builder.Services.AddScoped<ContentService>();

await builder.Build().RunAsync();
