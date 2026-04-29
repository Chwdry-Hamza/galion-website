import HeroScroll from '../components/sections/HeroScroll.jsx'
import FeatureSplit from '../components/sections/FeatureSplit.jsx'
import Brands from '../components/sections/Brands.jsx'
import PayChoice from '../components/sections/PayChoice.jsx'
import PayStack from '../components/sections/PayStack.jsx'
import SafetyPrivacy from '../components/sections/SafetyPrivacy.jsx'
import BrownSheet from '../components/sections/BrownSheet.jsx'
import SaveSmarter from '../components/sections/SaveSmarter.jsx'
import MoneyWorkHarder from '../components/sections/MoneyWorkHarder.jsx'
import SavingsAccount from '../components/sections/SavingsAccount.jsx'
import CryptoEasyWay from '../components/sections/CryptoEasyWay.jsx'
import AllInApp from '../components/sections/AllInApp.jsx'
import ColorBridge from '../components/sections/ColorBridge.jsx'

export default function Home() {
  return (
    <div className="home-page">
      <HeroScroll />
      <FeatureSplit />
      <Brands />
      <PayChoice />
      <PayStack />
      <SafetyPrivacy />
      <BrownSheet />
      <SaveSmarter />
      <MoneyWorkHarder />
      <SavingsAccount />
      <ColorBridge variant="white-to-navy" />
      <CryptoEasyWay />
      <ColorBridge variant="navy-to-cream" />
      <AllInApp />
    </div>
  )
}
