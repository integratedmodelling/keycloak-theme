<#import "template.ftl" as layout>
<@layout.registrationLayout displayInfo=true displayMessage=!messagesPerField.existsError('username'); section>
  <!--
      Form section
  -->
  <#if section = "form">
    <!-- Title -->
    <div class="au-top-text">
      <span class="au-top-content">
        ${msg("emailForgotTitle")}
      </span>
      <div class="au-top-info">
        <span >${msg("emailForgotMessage")}</span>
      </div>
    </div>
    <!-- Content  -->

    <q-form action="${url.loginAction}" method="post" class="au-form-container" >
      <div class="k-input-login-style">
        <div class="q-pb-md column">
          <q-input id="username" name="username" v-model="email" type="text" color="k-main"
            label="${msg('email')}"
            :error="<#if messagesPerField.existsError('username')>true<#else>false</#if>"
            error-message="${kcSanitize(messagesPerField.getFirstError('username'))?no_esc}" 
            :hide-bottom-space="true">
            <template v-slot:prepend>
              <q-icon name="email"></q-icon>
            </template>
          </q-input>
        </div>
      </div>
      <!-- Actions -->
      <div class="au-btn-container">
          <q-btn label="${msg('btnResetPassword')}" color="k-main" class="full-width" :loading="resetPasswordLoading" type="submit" @click="resetPasswordLoading = true" unelevated/>
      </div>
      <div class="au-btn-container au-bottom-links full-width items-end">
        <q-btn class="kh-link" label="${kcSanitize(msg('backToLogin'))?no_esc}" flat no-caps href="${url.loginUrl}" />        
      </div>
  </q-form>
  </#if>
</@layout.registrationLayout>
