# Dynamic Forms Module

## USAGE

Import the DynamicFormsModule

```typescript
import { DynamicFormsModule } from 'lib/dynamic-forms';
```

Then ensure your @NgModule imports it

```typescript
@NgModule({
  imports: [
    CommonModule,
    UiModule,
    DynamicFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    ...PROVIDERS
  ],
  declarations: [
    ...DECLARATIONS
  ]
})
export default class SitesModule {
  static routes = routes;
}
```

To use the DynamicFormComponent, add it to your template

```html
<dynamic-form [form]="form" [model]="site" (submit)="onSubmit($event)" (cancel)="onCancel($event)"></dynamic-form>
```

The DynamicFormComponent has the following _bindable_ properties

* `form` - this represents the Form object the component will load
* `model` - this represents any data model the _form_ is going to modify

The DynamicFormComponent emits the following events

* `submit` - this is called when the user performs any action which would trigger a "form submit"
* `cancel` - this is called when the user performs any action which would "cancel" the current form

The `$event` object passed to both `submit` and `cancel` events is defined as follows

```typescript
{
  model: model,
  form: form
}
```
