<template>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div> -->
  <!-- Main Framework7 App component where we pass Framework7 params -->
  <f7-app :params="f7params">
    <!-- initial page is specified in routes.js -->
    <f7-view main url="/">
      <f7-page :page-content="false">
        <!-- Navbar -->
        <f7-navbar>
          <f7-nav-left>
            <f7-link panel-open="right"><f7-icon f7="house"></f7-icon></f7-link>
          </f7-nav-left>
          <f7-nav-title>My App</f7-nav-title>
          <f7-nav-right>
            <f7-link>Right Link</f7-link>
          </f7-nav-right>
        </f7-navbar>
        <!-- Right Panel -->
        <f7-panel right>
          <f7-view>
            <f7-page>
              <f7-block>Right panel content</f7-block>
            </f7-page>
          </f7-view>
        </f7-panel>
        <!-- Bottom Toolbar -->
        <f7-toolbar tabbar labels :position="'bottom'">
          <f7-link
            tab-link="#tab-1"
            tab-link-active
            text="Tab 1"
            icon-ios="f7:envelope_fill"
            icon-aurora="f7:envelope_fill"
            icon-md="material:email"
          ></f7-link>
          <f7-link
            tab-link="#tab-2"
            text="Tab 2"
            icon-ios="f7:calendar_fill"
            icon-aurora="f7:calendar_fill"
            icon-md="material:today"
          ></f7-link>
          <f7-link
            tab-link="#tab-3"
            text="Tab 3"
            icon-ios="f7:cloud_upload_fill"
            icon-aurora="f7:cloud_upload_fill"
            icon-md="material:file_upload"
          ></f7-link>
        </f7-toolbar>
        <!-- Toolbar Contents -->
        <f7-tabs>
          <f7-tab id="tab-1" class="page-content" tab-active>
            <f7-block>
              <p>Tab 1 content</p>
              <i class="f7-icons size-50">house</i>
            </f7-block>
          </f7-tab>
          <f7-tab id="tab-2" class="page-content">
            <f7-block>
              <p>Tab 2 content</p>
              ...
            </f7-block>
          </f7-tab>
          <f7-tab id="tab-3" class="page-content">
            <f7-block>
              <p>Tab 3 content</p>
              ...
            </f7-block>
          </f7-tab>
        </f7-tabs>
      </f7-page>
    </f7-view>
  </f7-app>
</template>

<script>
export default {
  // App root data
  data() {
    return {
      // Framework7 parameters that we pass to <f7-app> component
      f7params: {
        // App Name
        name: "My App",
        // App id
        id: "com.myapp.test",
        // ...
      },
      isBottom: true,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
