<#import "template.ftl" as layout>
<@layout.registrationLayout displayMessage=!messagesPerField.existsError('username','password') displayInfo=realm.password && realm.registrationAllowed && !registrationDisabled??; section>
  <!--
      Form section
  -->
  <#if section = "form">
    <#if realm.password>

      <!-- Title -->
      <div 
        class="text-subtitle1 text-center"
        :class="{ 'q-pa-xs': $q.screen.xs, 'q-pa-sm': $q.screen.gt.xs }"
      >
          <div class="au-top-text">
        <span class="au-top-content">
        Log into your <strong>k.LAB</strong> account
        </span>
      </div>
      </div>
      <!-- Content -->
      <div class="full-width">
        <q-form action="${url.loginAction}" method="post">
          <#if !usernameHidden??>
            <div class="q-py-xs column">
              <q-input
                id="input-username" name="username" v-model="email" 
                label="<#if !realm.loginWithEmailAllowed>${msg('username')}<#elseif !realm.registrationEmailAsUsername>${msg('usernameOrEmail')}<#else>${msg('email')}</#if>"
                type="<#if !realm.loginWithEmailAllowed>text<#elseif !realm.registrationEmailAsUsername>text<#else>mail</#if>" 
                :error="<#if messagesPerField.existsError('username','password')>true<#else>false</#if>"
                error-message="${kcSanitize(messagesPerField.getFirstError('username','password'))?no_esc}"
                :hide-bottom-space="true"
                >
                <template v-slot:prepend>
                  <q-icon name="account_box"></q-icon>
                </template>
              </q-input>              
            </div>
          </#if>
          <div class="q-py-xs column">
            <q-input 
              id="input-password" name="password" v-model="password" label="${msg('password')}" :type="showPassword ? 'text' : 'password'" autocomplete="off" 
              :error="<#if usernameHidden?? && messagesPerField.existsError('username')>true<#else>false</#if>"
              error-message="${kcSanitize(messagesPerField.getFirstError('username','password'))?no_esc}"
              :hide-bottom-space="true"
            >
                <template v-slot:prepend>
                  <q-icon name="vpn_key"></q-icon>
                </template>

              <template v-slot:append>
                <q-icon :name="showPassword ? 'visibility' : 'visibility_off'" class="cursor-pointer" @click="showPassword = !showPassword" />
              </template>
            </q-input>
          </div>
          <!-- Options -->
          <div class="row justify-between items-center no-wrap">
            <#if realm.rememberMe && !usernameHidden??>
              <div>
                <q-toggle id="remember-me" name="rememberMe" v-model="rememberMe" false-value="off" true-value="on" label="${msg('rememberMe')}" />
              </div>
            </#if>
            <#if realm.resetPasswordAllowed>
              <div>
                <q-btn id="reset-password" label="${msg('doForgotPassword')}" color="accent" flat rounded no-caps href="${url.loginResetCredentialsUrl}" />
              </div>
            </#if>
          </div>
          <!-- Submit actions -->
          <div 
            class="row justify-center"
            :class="{ 'q-pa-sm': $q.screen.xs, 'q-pa-md': $q.screen.gt.xs }"
          >
            <q-btn id="login" name="login" label="${msg('doLogin')}" color="primary" :loading="loginLoading" @click="loginLoading = true" type="submit" />
          </div>
        </q-form>
      </div>
      <!-- Extra actions -->
      <div class="column items-center">
        <#if realm.password && realm.registrationAllowed && !registrationDisabled??>
          <div class="row justify-center items-center">
            <span>${msg('noAccount')}</span>
            <q-btn id="register" label="${msg('doRegister')}" color="accent" flat rounded no-caps href="${url.registrationUrl}" />
          </div>
        </#if>
      </div>
    </#if>
  <!--
      SocialProviders sections
  -->
  <#elseif section = "socialProviders" >
    <#if realm.password && social.providers??>
      <hr style="width: 75%" />
      <div 
        class="column items-center"
        :class="{ 'q-pb-xs': $q.screen.xs, 'q-pb-sm': $q.screen.gt.xs }"
      >
        <div class="text-subtitle1">
            ${msg("identity-provider-login-label")}
        </div>
        <div class="q-pa-sm row jsutify-center">
          <#list social.providers as p>
            <q-btn label="${p.displayName!}" color="accent" href="${p.loginUrl}" />
          </#list>
        </div>
      </div>
    </#if>
  </#if>

</@layout.registrationLayout>

  <style scoped lang="stylus">
.au-top-text
    text-align center
    .au-top-content
      font-size 1.4em
      font-weight 300
</style>