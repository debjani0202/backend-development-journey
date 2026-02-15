Dynamic Routing in Express
What is Dynamic Routing?
Dynamic routing means that part of a URL can change, and Express can capture that changing value.
Instead of creating separate routes for every possible value, we define a single route pattern that can handle multiple variations of a URL.
For example, when different URLs follow the same structure but contain different values at certain positions, dynamic routing allows Express to match them using placeholders.

Understanding Route Parameters
In Express, a dynamic part of the URL is defined using a colon (:) followed by a name.
When Express sees a route pattern containing :name, it understands that:
The fixed parts of the path must match exactly.
The part defined with :name is variable.
Whatever appears in that position will be captured.
The placeholder name becomes a key inside a special object provided by Express.


Where Does the Captured Value Go?
When a dynamic route matches a request, Express stores the extracted values inside:

req.params


This object contains key-value pairs where:
The key is the placeholder name defined in the route.
The value is the actual value from the URL.

Important points:
Route parameter values are always strings by default.
If a number is required, it must be converted manually.
The parameter must exist in the URL for the route to match.

How Express Matches a Dynamic Route
When a request reaches the server, Express follows this process:
It checks all defined routes.
It compares the request path with each route pattern.
If the structure matches, it identifies dynamic segments.
It extracts the values from those segments.
It stores the extracted values inside req.params.
It executes the corresponding route handler.
If no route matches, Express returns a 404 response.

Why Dynamic Routing Is Used
Dynamic routing is primarily used to identify specific resources.
It allows the server to handle multiple similar URLs using a single route definition. This makes the application:
More scalable
Easier to maintain
Cleaner in structure
Less repetitive
Instead of defining many similar routes manually, one dynamic route can handle unlimited variations.


Multiple Dynamic Parameters
A route can contain more than one dynamic segment.
Each placeholder becomes a separate key in the req.params object.
This allows Express to capture multiple values from different positions in the URL path.
Important Things to Remember
Route parameters are required for the route to match.
They are part of the URL path.
They are different from query parameters.
They are typically used to identify a single resource.
Route order matters in Express. More specific routes should be defined before more general ones.


Final Understanding
Dynamic routing works because Express treats parts of a route defined with :name as variable placeholders. When a request matches the route pattern, Express extracts those variable values and makes them available inside req.params.
This mechanism allows backend applications to handle dynamic, scalable, and structured API endpoints efficiently.
