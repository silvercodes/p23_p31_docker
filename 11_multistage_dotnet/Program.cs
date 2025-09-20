var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

app.MapGet("/", () => "Hello from ASP in Docker!!!!!!!!!!!");

app.MapGet("/time", () => new {
  ServerTime = DateTime.UtcNow
});

app.MapGet("/add/{a:int}/{b:int}", (int a, int b) => new {
  Operation = $"{a} + {b}",
  Result = a + b,
});


app.Run("http://0.0.0.0:80");
