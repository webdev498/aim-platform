## Application

NOTE: This makes no assumptions or assertions about the User's ACL - we will address that in a more detailed flow

app bootstrap
makes a request to auth/config/{domain}, passing environment.domain if present to retrieve auth config
auth guard kicks in and requires the user to login
  if not logged in, redirect to /login
  /login then authenticates against Auth Backend (Cognito, Auth0, whatever)
  after successful login
    redirect to default route (for app, for user) or redirect to page that triggered AuthGuard (localStorage.redirectTo)
app then makes a request to ApiGateway to retrieve a list of platforms the user has access too
-> if a single platform or a default one is provided, auto-select and move on
-> if multiple platforms, display a list, when a platform is selected move on


app then makes a request to ApiGateway to retrieve the full platform details
-> this includes available modules
app then goes module-by-module and builds out the user’s navigation options
app then navigates to the users default module (ie; “dashboard/”)
when the user navigates to a “module” route, the default “get” is called (assumed to be a list of items for that module, and paginated)
when the user selects an item for a module (edit/view/delete) a request is made to the data end point to retrieve the item with the corresponding id
-> if it’s an edit request, then the user is presented with an edit form
-> if it’s a view request, the user is presented with the “view” of the item (possibly still displayed in a “form” but without any “actions” available)
-> if it’s a delete request, the user is presented with a confirmation of some sort and upon confirmation makes a call to the data endpoints delete passing the id
