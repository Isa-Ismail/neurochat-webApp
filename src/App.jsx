import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import { BrowserRouter } from 'react-router-dom'
import Login from './components/pages/Login'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        
        {/*<Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/resetpasswordsuccessful" element={<ResetPasswordSuccessful />} />
        <Route path="/verifyotp" element={<VerifyOTP />} />
        <Route path="/resetpasswordotp" element={<ResetPasswordOTP />} />
        <Route path="/falcon" element={<Falcon />} />
        <Route path="/synaptiquery" element={<SynaptiQuery />} />
        <Route path="/chatgpt" element={<ChatGPT />} />
        <Route path="/claudeai" element={<ClaudeAI />} />
        <Route path="/palm2" element={<PaLM2 />} />
        <Route exact path="/settings" element={<Settings />} />
        <Route path="/settings/basicinformation" element={<BasicInformation />} />
        <Route path="/settings/changepassword" element={<ChangePassword />} />
        <Route path="/settings/support" element={<Support />} />
        <Route path="/settings/legaldocuments" element={<LegalDocuments />} />
        <Route path="/settings/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/settings/termsandconditions" element={<TermsAndConditions />} />
        <Route path="/settings/disclaimer" element={<Disclaimer />} />
        <Route path="/settings/virtualcard" element={<VirtualCard />} />
        <Route path="/settings/pricingplan" element={<PricingPlan />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
