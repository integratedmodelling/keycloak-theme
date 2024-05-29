<#import "template.ftl" as layout>
<#import "password-commons.ftl" as passwordCommons>
<@layout.registrationLayout displayMessage=!messagesPerField.existsError('password','password-confirm'); section>
    <!--
        Form section
    -->
    <#if section = "form">
      <!-- Title -->
      <div class="au-top-text">
        <#--  <span class="au-top-content">
          <p>Insert your email address</p>
        </span>  -->
      </div>
      <!-- Content -->
      <div class="full-width k-input-login-style">
        <q-form class="au-form-container" action="${url.loginAction}" method="post">
          <!-- New password -->
          <div class="q-py-xs column">
            <q-input 
              id="password-new" name="password-new" v-model="passwordNew" label="${msg('passwordNew')}" :type="showPasswordNew ? 'text' : 'password'" autocomplete="off" 
              :error="<#if messagesPerField.existsError('password','password-confirm')>true<#else>false</#if>"
              error-message="${kcSanitize(messagesPerField.get('password'))?no_esc}"
              :hide-bottom-space="true"
            >
              <template v-slot:prepend>
                <q-icon name="vpn_key"></q-icon>
              </template>
              <template v-slot:append>
                <q-icon :name="showPasswordNew ? 'visibility' : 'visibility_off'" class="cursor-pointer" @click="showPasswordNew = !showPasswordNew" />
              </template>
            </q-input>
          </div>
          <!-- Confirm password -->
          <div class="q-py-xs column">
            <q-input 
              id="password-cofimr" name="password-confirm" v-model="passwordConfirm" label="${msg('passwordConfirm')}" :type="showPasswordConfirm ? 'text' : 'password'" autocomplete="off" 
              :error="<#if messagesPerField.existsError('password','password-confirm')>true<#else>false</#if>"
              error-message="${kcSanitize(messagesPerField.get('password'))?no_esc}"
              :hide-bottom-space="true"
            >
              <template v-slot:prepend>
                <q-icon name="vpn_key"></q-icon>
              </template>
              <template v-slot:append>
                <q-icon :name="showPasswordConfirm ? 'visibility' : 'visibility_off'" class="cursor-pointer" @click="showPasswordConfirm = !showPasswordConfirm" />
              </template>
            </q-input>
          </div>
          
          <!-- Submit actions -->
          <div class="au-btn-container row justify-center ">
            <#if isAppInitiatedAction??>
              <div class="row q-gutter-md">
                <div>
                  <q-btn label="${msg('doCancel')}" type="submit" color="k-main" outline value="true" />
                </div>
                <div>
                  <q-btn name="cancel-aia" label="${msg('doSubmit')}" type="submit" color="k-main" :loading="updatedPasswordLoading" @click="updatedPasswordLoading = true" />
                </div>
              </div>
            <#else>
              <q-btn label="${msg('doApply')}" type="submit" color="k-main" unelevated :loading="updatedPasswordLoading" @click="updatedPasswordLoading = true" />
            </#if>
          </div>  
          <!-- Options -->
          <div >
            <@passwordCommons.logoutOtherSessions/>
          </div> 
        </q-form>
      </div>
    </#if>
</@layout.registrationLayout>    