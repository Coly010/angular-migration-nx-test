# Angular Standalone Migration in Nx Testing Repo


This is a repository to test the Standalone Migration Schematic in an Nx Workspace.

## Findings

- It works well for the application.
- There are some issues with Libraries.

Running the commands will eventually end up deleting the UiModule, and the `index.ts` entrypoint to the `ui` library.

The components from the `ui` library that are used in the app will not be included in the `app.component.ts`

## Commands to Run

### Step 1

`nx g @angular/core:standalone-migraion`

Choose `standalone-bootstrap`

Set path as `apps/acme`.


### Step 2

`nx g @angular/core:standalone-migration`

Choose `convert-to-standalone`

Set path as `libs/`.

### Step 3

`nx g @angular/core:standalone-migration`

Choose `prune-ng-modules`

Set path as `./`

**Notice that the `ui.module.ts` and `index.ts` files are deleted from the `ui` library, but the components are never imported into the `app.component.ts` to ensure they are still available.
