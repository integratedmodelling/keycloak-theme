<#import "template.ftl" as layout>
  <@layout.registrationLayout displayMessage=!messagesPerField.existsError('username','password') displayInfo=realm.password && realm.registrationAllowed && !registrationDisabled??; section>
    <!--
      Form section
  -->
    <#if section="form">
      <div class="au-top-text">
        <span class="au-top-content">
          <#if client.clientId="security-admin-console">          
            ${client.description}
          <#else>
            Log into your <strong>k.LAB</strong> account          
          </#if>
        </span>
      </div>
      <#if realm.password>
        <div class="au-top-info"></div>
        <q-form class="au-form-container" action="${url.loginAction}" method="post">
          <div class="k-input-login-style">
            <#if !usernameHidden??>
              <q-input
                color="k-main"
                id="input-username" name="username" v-model="email"
                label="<#if !realm.loginWithEmailAllowed>
                      ${msg('username')}
                      <#elseif !realm.registrationEmailAsUsername>
                      ${msg('usernameOrEmail')}
                      <#else>
                      ${msg('email')}
                      </#if>"
                type="<#if !realm.loginWithEmailAllowed>text<#elseif !realm.registrationEmailAsUsername>text<#else>mail</#if>"
                :error="<#if messagesPerField.existsError('username','password')>true<#else>false</#if>"
                error-message="${kcSanitize(messagesPerField.getFirstError('username','password'))?no_esc}">
                <template v-slot:prepend>
                  <q-icon name="account_box"></q-icon>
                </template>
              </q-input>
            </#if>
            <div class="q-py-xs column">
              <q-input
                color="k-main"
                id="input-password" name="password" v-model="password" label="${msg('password')}" :type="showPassword ? 'text' : 'password'" autocomplete="off"
                :error="<#if usernameHidden?? && messagesPerField.existsError('username')>true<#else>false</#if>"
                error-message="${kcSanitize(messagesPerField.getFirstError('username','password'))?no_esc}">
                <template v-slot:prepend>
                  <q-icon name="vpn_key"></q-icon>
                </template>
                <template v-slot:append>
                  <q-icon :name="showPassword ? 'visibility' : 'visibility_off'" class="cursor-pointer" @click="showPassword = !showPassword" />
                </template>
              </q-input>
            </div>            
          </div>
          <!-- Submit actions -->
          <div 
            class="au-btn-container"                    
          >
            <q-btn 
            id="login" 
            name="login" 
            label="${msg('doLogin')}" 
            color="k-main"  
            :loading="loginLoading" 
            @click="loginLoading = true" 
            type="submit" 
            class="full-width" 
            unelevated/>
          </div>
          <!-- Options -->
          <div class="row justify-between items-center no-wrap">
            <#if realm.resetPasswordAllowed>
              <!-- Options -->
              <div class="au-btn-container au-bottom-links full-width items-end">
                <div>
                  <#if realm.resetPasswordAllowed>
                    <q-btn class="kh-link" id="reset-password" label="${msg('doForgotPassword')}" flat no-caps href="${url.loginResetCredentialsUrl}" />
                  </#if>
                </div>
                <div>
                  <#if realm.password && realm.registrationAllowed && !registrationDisabled??>
                    <span>
                      ${msg('noAccount')}
                    </span>
                    <q-btn class="kh-link" id="register" label="${msg('doRegister')}" flat no-caps href="${url.registrationUrl}" style="{'margin-top':'-1px'}" />
                  </#if>
                </div>
                <div>
                  <#if realm.rememberMe && !usernameHidden??>
                    <div class="kh-toggle-remember">
                      <q-toggle id="remember-me" name="rememberMe" v-model="rememberMe" false-value="off" true-value="on" label="${msg('rememberMe')}" />
                    </div>
                  </#if>
                </div>
              </div>
            </#if>
          </div>
        </q-form>
      </#if>
      <!--
      SocialProviders sections
  -->
      <#elseif section="socialProviders">
        <#if realm.password && social.providers??>
          <hr style="width: 75%" />
          <div
            class="column items-center"
            :class="{ 'q-pb-xs': $q.screen.xs, 'q-pb-sm': $q.screen.gt.xs }">
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
  