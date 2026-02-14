Dynamic Routing in Express
What is Dynamic Routing?

Dynamic routing means part of the URL can change, and Express can capture that changing value.

Example URLs:

/news/10
/news/25
/news/100


The number at the end changes.

Instead of writing separate routes for each value, we define one dynamic route:

/news/:id


Here :id is a placeholder.

What Does :id Mean?

When Express sees:

/news/:id


It understands that:

/news is fixed.

:id is variable.

Whatever appears in that position will be captured.

These URLs all match:

/news/1
/news/99
/news/abc


The value after /news/ is treated as dynamic.

Where Does the Value Go?

Express stores dynamic values inside:

req.params


If the URL is:

/news/10


Then inside the route:

req.params


will be:

{ id: "10" }


So:

req.params.id


equals:

"10"


Important:

Route parameters are strings by default.

Convert them if you need numbers.

Example:

parseInt(req.params.id)

How Express Matches a Dynamic Route

When a request comes like:

GET /news/10


Express does the following internally:

Checks all defined routes.

Compares /news/10 with /news/:id.

Sees that the structure matches.

Extracts the value 10.

Stores it inside req.params.

Executes the route function.

If no route matches, Express returns a 404 response.

Why Dynamic Routing Is Used

Dynamic routing is mainly used to identify specific resources.

Examples:

/users/5
/products/20
/orders/1001


Each URL represents one specific item.

Instead of writing:

/users/1
/users/2
/users/3


We write:

/users/:id


One route can handle unlimited values.

Multiple Dynamic Parameters

You can define more than one parameter.

Example route:

/users/:userId/orders/:orderId


If the URL is:

/users/5/orders/20


Then:

req.params


will be:

{
  userId: "5",
  orderId: "20"
}


Each placeholder becomes a key in the object.

Important Things to Remember

Route parameters are required.
If the route is /news/:id, then /news alone will not match.

Parameters are part of the URL path.
They are different from query parameters.

They are usually used to identify a single record.

They are always strings unless converted.

Route order matters.
A general route like /news/:id can override a specific route like /news/latest if placed above it.

Final Understanding

Dynamic routing works because Express treats :name as a variable placeholder in a route pattern. When a request matches that pattern, Express extracts the dynamic value and stores it in req.params. This allows the server to use that value in logic such as fetching data from a database or returning specific content.

Dynamic routing makes APIs flexible, scalable, and clean without needing separate routes for every possible value.