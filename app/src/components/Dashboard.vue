<template>
  <div
  style="--sidebar-width: 19.5rem; --sidebar-width-icon: 3rem"
  class="group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-background-primary"
>
  <div
    class="group peer hidden text-text-primary md:block"
    data-state="expanded"
    data-collapsible=""
    data-variant="sidebar"
    data-side="left"
  >
    <div
      class="relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180 group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
    ></div>
    <div
      class="fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] border-border-primary transition-[left,right,width] duration-200 ease-linear md:flex left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l py-6"
    >
      <div
        data-sidebar="sidebar"
        class="group-data-[variant=floating]:shadow flex h-full w-full flex-col bg-background-primary group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-border-primary"
      >
        <div
          data-sidebar="content"
          class="flex min-h-0 flex-1 flex-col gap-2 overflow-auto px-4 group-data-[collapsible=icon]:overflow-hidden pt-6 lg:pt-18"
        >
          <ul data-sidebar="menu" class="flex w-full min-w-0 flex-col">
            <li data-sidebar="menu-item" class="group/menu-item relative list-none">
              <a
                href="#"
                class="peer/menu-button flex w-full items-center gap-3 overflow-hidden rounded-none text-left text-base outline-none ring-border-primary transition-[width,height,padding] focus-visible:ring-2 active:bg-background-secondary active:text-text-primary disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-background-secondary data-[active=true]:font-medium data-[active=true]:text-text-primary data-[state=open]:hover:bg-background-secondary data-[state=open]:hover:text-text-primary group-data-[collapsible=icon]:!size-10 group-data-[collapsible=icon]:!p-2 [&amp;&gt;span:last-child]:truncate [&amp;&gt;svg]:size-6 [&amp;&gt;svg]:shrink-0 hover:bg-background-secondary hover:text-text-primary h-auto p-2"
                data-sidebar="menu-button"
                data-size="default"
                data-active="false"
                ><svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="size-6 shrink-0"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"
                  ></path></svg
                ><span>Home</span></a
              >
            </li>
            <li data-sidebar="menu-item" class="group/menu-item relative list-none">
              <a
                href="#"
                class="peer/menu-button flex w-full items-center gap-3 overflow-hidden rounded-none text-left text-base outline-none ring-border-primary transition-[width,height,padding] focus-visible:ring-2 active:bg-background-secondary active:text-text-primary disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-background-secondary data-[active=true]:font-medium data-[active=true]:text-text-primary data-[state=open]:hover:bg-background-secondary data-[state=open]:hover:text-text-primary group-data-[collapsible=icon]:!size-10 group-data-[collapsible=icon]:!p-2 [&amp;&gt;span:last-child]:truncate [&amp;&gt;svg]:size-6 [&amp;&gt;svg]:shrink-0 hover:bg-background-secondary hover:text-text-primary h-auto p-2"
                data-sidebar="menu-button"
                data-size="default"
                data-active="false"
                ><svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="size-6 shrink-0"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m6.516 14.323-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998 0 0 0 .832-.586L12 5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385-3.736-2.491a.995.995 0 0 0-1.109 0l-3.904 2.603 1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962 4.09-.326z"
                  ></path></svg
                ><span>Saved</span>
                <div
                  class="inline-flex items-center rounded-full border px-2 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-border-primary focus:ring-offset-2 text-text-primary border-border-primary ml-auto"
                >
                  24
                </div></a
              >
            </li>
            <li data-sidebar="menu-item" class="group/menu-item relative list-none">
              <div class="w-full" data-orientation="vertical">
                <div
                  data-state="closed"
                  data-orientation="vertical"
                  class="border-b border-border-primary first:border-t border-none"
                >
                  <h3 data-orientation="vertical" data-state="closed" class="flex w-full">
                    <button
                      type="button"
                      aria-controls="radix-:Rmp:"
                      aria-expanded="false"
                      data-state="closed"
                      data-orientation="vertical"
                      id="radix-:R6p:"
                      class="flex flex-1 items-center justify-between transition-all focus-visible:outline-none focus-visible:ring-0 [&amp;[data-state=open]&gt;svg]:rotate-180 p-2 text-base font-normal [&amp;&gt;svg]:size-4"
                      data-radix-collection-item=""
                    >
                      <span class="flex items-center gap-3"
                        ><svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 24 24"
                          class="size-6 shrink-0"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm7.931 9H13V4.069A8.008 8.008 0 0 1 19.931 11zM4 12c0-4.072 3.061-7.436 7-7.931V12a.996.996 0 0 0 .111.438c.015.03.022.063.041.093l4.202 6.723A7.949 7.949 0 0 1 12 20c-4.411 0-8-3.589-8-8zm13.052 6.196L13.805 13h6.126a7.992 7.992 0 0 1-2.879 5.196z"
                          ></path>
                        </svg>
                        <p>Dashboard</p></span
                      ><svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="0"
                        viewBox="0 0 15 15"
                        class="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                  </h3>
                  <div
                    data-state="closed"
                    id="radix-:Rmp:"
                    hidden=""
                    role="region"
                    aria-labelledby="radix-:R6p:"
                    data-orientation="vertical"
                    class="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                    style="
                      --radix-accordion-content-height: var(--radix-collapsible-content-height);
                      --radix-accordion-content-width: var(--radix-collapsible-content-width);
                    "
                  ></div>
                  <div
                    data-state="closed"
                    id="radix-:Rmp:"
                    hidden=""
                    role="region"
                    aria-labelledby="radix-:R6p:"
                    data-orientation="vertical"
                    class="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                    style="
                      --radix-accordion-content-height: var(--radix-collapsible-content-height);
                      --radix-accordion-content-width: var(--radix-collapsible-content-width);
                    "
                  ></div>
                  <div
                    data-state="closed"
                    id="radix-:Rmp:"
                    hidden=""
                    role="region"
                    aria-labelledby="radix-:R6p:"
                    data-orientation="vertical"
                    class="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                    style="
                      --radix-accordion-content-height: var(--radix-collapsible-content-height);
                      --radix-accordion-content-width: var(--radix-collapsible-content-width);
                    "
                  ></div>
                </div>
              </div>
            </li>
            <li data-sidebar="menu-item" class="group/menu-item relative list-none">
              <a
                href="#"
                class="peer/menu-button flex w-full items-center gap-3 overflow-hidden rounded-none text-left text-base outline-none ring-border-primary transition-[width,height,padding] focus-visible:ring-2 active:bg-background-secondary active:text-text-primary disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-background-secondary data-[active=true]:font-medium data-[active=true]:text-text-primary data-[state=open]:hover:bg-background-secondary data-[state=open]:hover:text-text-primary group-data-[collapsible=icon]:!size-10 group-data-[collapsible=icon]:!p-2 [&amp;&gt;span:last-child]:truncate [&amp;&gt;svg]:size-6 [&amp;&gt;svg]:shrink-0 hover:bg-background-secondary hover:text-text-primary h-auto p-2"
                data-sidebar="menu-button"
                data-size="default"
                data-active="false"
                ><svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="size-6 shrink-0"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 7.999a1 1 0 0 0-.516-.874l-9.022-5a1.003 1.003 0 0 0-.968 0l-8.978 4.96a1 1 0 0 0-.003 1.748l9.022 5.04a.995.995 0 0 0 .973.001l8.978-5A1 1 0 0 0 22 7.999zm-9.977 3.855L5.06 7.965l6.917-3.822 6.964 3.859-6.918 3.852z"
                  ></path>
                  <path
                    d="M20.515 11.126 12 15.856l-8.515-4.73-.971 1.748 9 5a1 1 0 0 0 .971 0l9-5-.97-1.748z"
                  ></path>
                  <path
                    d="M20.515 15.126 12 19.856l-8.515-4.73-.971 1.748 9 5a1 1 0 0 0 .971 0l9-5-.97-1.748z"
                  ></path></svg
                ><span>Projects</span></a
              >
            </li>
            <li data-sidebar="menu-item" class="group/menu-item relative list-none">
              <a
                href="#"
                class="peer/menu-button flex w-full items-center gap-3 overflow-hidden rounded-none text-left text-base outline-none ring-border-primary transition-[width,height,padding] focus-visible:ring-2 active:bg-background-secondary active:text-text-primary disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-background-secondary data-[active=true]:font-medium data-[active=true]:text-text-primary data-[state=open]:hover:bg-background-secondary data-[state=open]:hover:text-text-primary group-data-[collapsible=icon]:!size-10 group-data-[collapsible=icon]:!p-2 [&amp;&gt;span:last-child]:truncate [&amp;&gt;svg]:size-6 [&amp;&gt;svg]:shrink-0 hover:bg-background-secondary hover:text-text-primary h-auto p-2"
                data-sidebar="menu-button"
                data-size="default"
                data-active="false"
                ><svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="size-6 shrink-0"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.903 8.586a.997.997 0 0 0-.196-.293l-6-6a.997.997 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a.991.991 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a.952.952 0 0 0-.051-.259c-.01-.032-.019-.063-.033-.093zM16.586 8H14V5.414L16.586 8zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10H6z"
                  ></path>
                  <path d="M8 12h8v2H8zm0 4h8v2H8zm0-8h2v2H8z"></path></svg
                ><span>Documents</span></a
              >
            </li>
          </ul>
        </div>
        <div data-sidebar="footer" class="flex flex-col gap-2 px-4 mt-auto">
          <div>
            <li data-sidebar="menu-item" class="group/menu-item relative list-none">
              <a
                href="#"
                class="peer/menu-button overflow-hidden rounded-none text-left text-base outline-none ring-border-primary transition-[width,height,padding] focus-visible:ring-2 active:bg-background-secondary active:text-text-primary disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-background-secondary data-[active=true]:font-medium data-[active=true]:text-text-primary data-[state=open]:hover:bg-background-secondary data-[state=open]:hover:text-text-primary group-data-[collapsible=icon]:!size-10 group-data-[collapsible=icon]:!p-2 [&amp;&gt;span:last-child]:truncate [&amp;&gt;svg]:size-6 [&amp;&gt;svg]:shrink-0 hover:bg-background-secondary hover:text-text-primary h-auto p-2 w-full gap-3"
                data-sidebar="menu-button"
                data-size="default"
                data-active="false"
                ><svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="size-6 shrink-0"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6a3.939 3.939 0 0 0-3.934 3.934h2C10.066 8.867 10.934 8 12 8s1.934.867 1.934 1.934c0 .598-.481 1.032-1.216 1.626a9.208 9.208 0 0 0-.691.599c-.998.997-1.027 2.056-1.027 2.174V15h2l-.001-.633c.001-.016.033-.386.441-.793.15-.15.339-.3.535-.458.779-.631 1.958-1.584 1.958-3.182A3.937 3.937 0 0 0 12 6zm-1 10h2v2h-2z"
                  ></path>
                  <path
                    d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
                  ></path></svg
                ><span>Support</span></a
              >
            </li>
            <li data-sidebar="menu-item" class="group/menu-item relative list-none">
              <a
                href="#"
                class="peer/menu-button items-center overflow-hidden rounded-none text-left text-base outline-none ring-border-primary transition-[width,height,padding] focus-visible:ring-2 active:bg-background-secondary active:text-text-primary disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-background-secondary data-[active=true]:font-medium data-[active=true]:text-text-primary data-[state=open]:hover:bg-background-secondary data-[state=open]:hover:text-text-primary group-data-[collapsible=icon]:!size-10 group-data-[collapsible=icon]:!p-2 [&amp;&gt;span:last-child]:truncate [&amp;&gt;svg]:size-6 [&amp;&gt;svg]:shrink-0 hover:bg-background-secondary hover:text-text-primary h-auto flex gap-3 p-2 w-full"
                data-sidebar="menu-button"
                data-size="default"
                data-active="false"
                ><svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="size-6 shrink-0"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 16c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.084 0 2 .916 2 2s-.916 2-2 2-2-.916-2-2 .916-2 2-2z"
                  ></path>
                  <path
                    d="m2.845 16.136 1 1.73c.531.917 1.809 1.261 2.73.73l.529-.306A8.1 8.1 0 0 0 9 19.402V20c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-.598a8.132 8.132 0 0 0 1.896-1.111l.529.306c.923.53 2.198.188 2.731-.731l.999-1.729a2.001 2.001 0 0 0-.731-2.732l-.505-.292a7.718 7.718 0 0 0 0-2.224l.505-.292a2.002 2.002 0 0 0 .731-2.732l-.999-1.729c-.531-.92-1.808-1.265-2.731-.732l-.529.306A8.1 8.1 0 0 0 15 4.598V4c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v.598a8.132 8.132 0 0 0-1.896 1.111l-.529-.306c-.924-.531-2.2-.187-2.731.732l-.999 1.729a2.001 2.001 0 0 0 .731 2.732l.505.292a7.683 7.683 0 0 0 0 2.223l-.505.292a2.003 2.003 0 0 0-.731 2.733zm3.326-2.758A5.703 5.703 0 0 1 6 12c0-.462.058-.926.17-1.378a.999.999 0 0 0-.47-1.108l-1.123-.65.998-1.729 1.145.662a.997.997 0 0 0 1.188-.142 6.071 6.071 0 0 1 2.384-1.399A1 1 0 0 0 11 5.3V4h2v1.3a1 1 0 0 0 .708.956 6.083 6.083 0 0 1 2.384 1.399.999.999 0 0 0 1.188.142l1.144-.661 1 1.729-1.124.649a1 1 0 0 0-.47 1.108c.112.452.17.916.17 1.378 0 .461-.058.925-.171 1.378a1 1 0 0 0 .471 1.108l1.123.649-.998 1.729-1.145-.661a.996.996 0 0 0-1.188.142 6.071 6.071 0 0 1-2.384 1.399A1 1 0 0 0 13 18.7l.002 1.3H11v-1.3a1 1 0 0 0-.708-.956 6.083 6.083 0 0 1-2.384-1.399.992.992 0 0 0-1.188-.141l-1.144.662-1-1.729 1.124-.651a1 1 0 0 0 .471-1.108z"
                  ></path></svg
                ><span>Settings</span></a
              >
            </li>
          </div>
        </div>
      </div>
    </div>
  </div>
  <main class="flex-1 bg-background-secondary pt-16 lg:pt-18">
    <header
      class="fixed left-0 right-0 top-0 z-30 flex min-h-16 w-full items-center border-b border-border-primary bg-white px-4 md:min-h-18 md:px-8"
    >
      <div
        class="mx-auto grid size-full grid-cols-2 items-center justify-between gap-4 lg:grid-cols-[1fr_1.5fr_1fr]"
      >
        <div class="flex items-center gap-4">
          <button
            class="focus-visible:ring-border-primary inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-0 text-text-primary gap-2 p-0 lg:hidden"
            data-sidebar="trigger"
          >
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="0"
              viewBox="0 0 15 15"
              class="size-7"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                fill="currentColor"
              ></path></svg
            ><span class="sr-only">Toggle Sidebar</span></button
          ><a href="#" class="justify-self-start"
            ><img
              src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
              alt="Relume logo"
              class="shrink-0"
          /></a>
        </div>
        <div class="hidden lg:block lg:w-full lg:max-w-md lg:justify-self-center">
          <div class="relative flex w-full items-center">
            <div class="absolute left-3">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="size-6"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"
                ></path>
              </svg>
            </div>
            <input
              class="flex size-full min-h-11 border border-border-primary py-2 align-middle file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 pl-[2.75rem] pr-3 shadow-none h-8 bg-background-primary focus-visible:ring-2 focus-visible:ring-border-primary w-full"
              data-sidebar="input"
              placeholder="Search"
            />
          </div>
        </div>
        <div class="flex items-center gap-2 justify-self-end md:gap-4">
          <button class="p-2 lg:hidden">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              class="size-6"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"
              ></path>
            </svg></button
          ><button
            type="button"
            id="radix-:Rmm:"
            aria-haspopup="menu"
            aria-expanded="false"
            data-state="closed"
            class="cursor-pointer border border-border-alternative p-2 focus-visible:outline-none relative"
          >
            <div
              class="absolute bottom-auto left-auto right-2 top-2 size-2 rounded-full bg-black outline-offset-0 outline-white"
            ></div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              class="size-6"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z"
              ></path>
            </svg></button
          ><button
            type="button"
            id="radix-:Rum:"
            aria-haspopup="menu"
            aria-expanded="false"
            data-state="closed"
            class="cursor-pointer border border-border-alternative focus-visible:outline-none flex items-center p-0"
          >
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/avatar-image.svg"
              alt="Avatar"
              class="size-10 rounded-full object-cover"
            />
          </button>
        </div>
      </div>
    </header>
    <div class="border-b-2 border-dashed border-[#d3d3d3] py-6 text-center text-black/50">
      <h1>Click and paste Page Header</h1>
    </div>
    <div class="container px-6 py-8 md:px-8 md:py-10 lg:py-12">
      <div class="grid grid-cols-1 gap-12">
        <div
          class="flex h-screen items-center justify-center border-2 border-dashed border-[#d3d3d3] py-6 text-center text-black/50"
        >
          <h2>Click and paste Main Content</h2>
        </div>
      </div>
    </div>
  </main>
</div>

</template>

<script setup></script>

<style lang="scss" scoped></style>
