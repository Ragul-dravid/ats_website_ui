import React from "react";

function Home() {
  return (
    <div class="container-fluid">
    <div class="card shadow border-0 mb-5 top-header">
      <div class="container-fluid py-4">
        <div class="row align-items-center">
          <div class="col-12">
            <div className="text-center">
              <h1 class="fs-3 text-uppercase" style={{letterSpacing:'2px',wordSpacing:'5px'}}>Applicant Tracking System</h1>
            </div>
          </div>
          {/* <div class="col-auto">
            <div class="hstack gap-2 justify-content-end">
              <a href="{{ url('/product') }}">
                <button
                  type="button"
                  class="btn btn-sm btn-neutral border-base  d-md-block"
                >
                  <span>Back</span>
                </button>
              </a>
              <button type="submit" class="btn btn-sm btn-primary">
                <span>Save</span>
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    <div class="card shadow border-0 mb-7">
      <div class="card-header">
        <h5 class="mb-0">Applications</h5>
      </div>
      <div class="table-responsive">
        <table class="table table-hover table-nowrap">
          <thead class="thead-light">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Date</th>
              <th scope="col">Company</th>
              <th scope="col">Offer</th>
              <th scope="col">Meeting</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                  class="avatar avatar-sm rounded-circle me-2"
                />
                Robert Fox
              </td>
              <td>Feb 15, 2021</td>
              <td>
                <img
                  alt="..."
                  src="https://preview.webpixels.io/web/img/other/logos/logo-1.png"
                  class="avatar avatar-xs rounded-circle me-2"
                />
                Dribbble
              </td>
              <td>$3.500</td>
              <td>
                <span class="badge badge-lg badge-dot">
                  <i class="bg-success"></i>Scheduled
                </span>
              </td>
              <td class="text-end">
                View
                <button
                  type="button"
                  class="btn btn-sm btn-square btn-neutral text-danger-hover"
                >
                  <i class="bi bi-trash"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1610271340738-726e199f0258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                  class="avatar avatar-sm rounded-circle me-2"
                />
                Darlene Robertson
              </td>
              <td>Apr 15, 2021</td>
              <td>
                <img
                  alt="..."
                  src="https://preview.webpixels.io/web/img/other/logos/logo-2.png"
                  class="avatar avatar-xs rounded-circle me-2"
                />
                Netguru
              </td>
              <td>$2.750</td>
              <td>
                <span class="badge badge-lg badge-dot">
                  <i class="bg-warning"></i>Postponed
                </span>
              </td>
              <td class="text-end">
                View
                <button
                  type="button"
                  class="btn btn-sm btn-square btn-neutral text-danger-hover"
                >
                  <i class="bi bi-trash"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                  class="avatar avatar-sm rounded-circle me-2"
                />
                Theresa Webb
              </td>
              <td>Mar 20, 2021</td>
              <td>
                <img
                  alt="..."
                  src="https://preview.webpixels.io/web/img/other/logos/logo-3.png"
                  class="avatar avatar-xs rounded-circle me-2"
                />
                Figma
              </td>
              <td>$4.200</td>
              <td>
                <span class="badge badge-lg badge-dot">
                  <i class="bg-success"></i>Scheduled
                </span>
              </td>
              <td class="text-end">
                View
                <button
                  type="button"
                  class="btn btn-sm btn-square btn-neutral text-danger-hover"
                >
                  <i class="bi bi-trash"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1612422656768-d5e4ec31fac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                  class="avatar avatar-sm rounded-circle me-2"
                />
                Kristin Watson
              </td>
              <td>Feb 15, 2021</td>
              <td>
                <img
                  alt="..."
                  src="https://preview.webpixels.io/web/img/other/logos/logo-4.png"
                  class="avatar avatar-xs rounded-circle me-2"
                />
                Mailchimp
              </td>
              <td>$3.500</td>
              <td>
                <span class="badge badge-lg badge-dot">
                  <i class="bg-dark"></i>Not discussed
                </span>
              </td>
              <td class="text-end">
                View
                <button
                  type="button"
                  class="btn btn-sm btn-square btn-neutral text-danger-hover"
                >
                  <i class="bi bi-trash"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                  class="avatar avatar-sm rounded-circle me-2"
                />
                Cody Fisher
              </td>
              <td>Apr 10, 2021</td>
              <td>
                <img
                  alt="..."
                  src="https://preview.webpixels.io/web/img/other/logos/logo-5.png"
                  class="avatar avatar-xs rounded-circle me-2"
                />
                Webpixels
              </td>
              <td>$1.500</td>
              <td>
                <span class="badge badge-lg badge-dot">
                  <i class="bg-danger"></i>Canceled
                </span>
              </td>
              <td class="text-end">
                View
                <button
                  type="button"
                  class="btn btn-sm btn-square btn-neutral text-danger-hover"
                >
                  <i class="bi bi-trash"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                  class="avatar avatar-sm rounded-circle me-2"
                />
                Robert Fox
              </td>
              <td>Feb 15, 2021</td>
              <td>
                <img
                  alt="..."
                  src="https://preview.webpixels.io/web/img/other/logos/logo-1.png"
                  class="avatar avatar-xs rounded-circle me-2"
                />
                Dribbble
              </td>
              <td>$3.500</td>
              <td>
                <span class="badge badge-lg badge-dot">
                  <i class="bg-success"></i>Scheduled
                </span>
              </td>
              <td class="text-end">
                View
                <button
                  type="button"
                  class="btn btn-sm btn-square btn-neutral text-danger-hover"
                >
                  <i class="bi bi-trash"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1610271340738-726e199f0258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                  class="avatar avatar-sm rounded-circle me-2"
                />
                Darlene Robertson
              </td>
              <td>Apr 15, 2021</td>
              <td>
                <img
                  alt="..."
                  src="https://preview.webpixels.io/web/img/other/logos/logo-2.png"
                  class="avatar avatar-xs rounded-circle me-2"
                />
                Netguru
              </td>
              <td>$2.750</td>
              <td>
                <span class="badge badge-lg badge-dot">
                  <i class="bg-warning"></i>Postponed
                </span>
              </td>
              <td class="text-end">
                View
                <button
                  type="button"
                  class="btn btn-sm btn-square btn-neutral text-danger-hover"
                >
                  <i class="bi bi-trash"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                  class="avatar avatar-sm rounded-circle me-2"
                />
                Theresa Webb
              </td>
              <td>Mar 20, 2021</td>
              <td>
                <img
                  alt="..."
                  src="https://preview.webpixels.io/web/img/other/logos/logo-3.png"
                  class="avatar avatar-xs rounded-circle me-2"
                />
                Figma
              </td>
              <td>$4.200</td>
              <td>
                <span class="badge badge-lg badge-dot">
                  <i class="bg-success"></i>Scheduled
                </span>
              </td>
              <td class="text-end">
                View
                <button
                  type="button"
                  class="btn btn-sm btn-square btn-neutral text-danger-hover"
                >
                  <i class="bi bi-trash"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1612422656768-d5e4ec31fac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                  class="avatar avatar-sm rounded-circle me-2"
                />
                Kristin Watson
              </td>
              <td>Feb 15, 2021</td>
              <td>
                <img
                  alt="..."
                  src="https://preview.webpixels.io/web/img/other/logos/logo-4.png"
                  class="avatar avatar-xs rounded-circle me-2"
                />
                Mailchimp
              </td>
              <td>$3.500</td>
              <td>
                <span class="badge badge-lg badge-dot">
                  <i class="bg-dark"></i>Not discussed
                </span>
              </td>
              <td class="text-end">
                View
                <button
                  type="button"
                  class="btn btn-sm btn-square btn-neutral text-danger-hover"
                >
                  <i class="bi bi-trash"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                  class="avatar avatar-sm rounded-circle me-2"
                />
                Cody Fisher
              </td>
              <td>Apr 10, 2021</td>
              <td>
                <img
                  alt="..."
                  src="https://preview.webpixels.io/web/img/other/logos/logo-5.png"
                  class="avatar avatar-xs rounded-circle me-2"
                />
                Webpixels
              </td>
              <td>$1.500</td>
              <td>
                <span class="badge badge-lg badge-dot">
                  <i class="bg-danger"></i>Canceled
                </span>
              </td>
              <td class="text-end">
                View
                <button
                  type="button"
                  class="btn btn-sm btn-square btn-neutral text-danger-hover"
                >
                  <i class="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card-footer border-0 py-5">
        <span class="text-muted text-sm">
          Showing 10 items out of 250 results found
        </span>
      </div>
    </div>
  </div>
  );
}

export default Home;
