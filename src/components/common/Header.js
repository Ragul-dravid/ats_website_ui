import React from "react";

function Header() {
  return (
    <header class="bg-surface-primary border-bottom pt-6">
      <div class="container-fluid">
        <div class="mb-npx">
          <div class="row align-items-center">
            <div class="col-sm-6 col-12 mb-4 mb-sm-0">
              <h1 class="h2 mb-0 ls-tight">Application</h1>
            </div>
            <div class="col-sm-6 col-12 text-sm-end">
              <div class="mx-n1">
                  <span class="pe-2">
                    <i class="bi bi-pencil"></i>
                  </span>
                  <span>Edit</span>
                  <span class="pe-2">
                    <i class="bi bi-plus"></i>
                  </span>
                  <span>Create</span>
              </div>
            </div>
          </div>
          <ul class="nav nav-tabs mt-4 overflow-x border-0">
            <li class="nav-item">
                All files
            </li>
            <li class="nav-item">
                Shared
            </li>
            <li class="nav-item">
                File requests
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
