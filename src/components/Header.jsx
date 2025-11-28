import logo from '../assets/investment-calculator-logo.png';

export default function Header() {
  return (
    <header className="header-container">
      <img src={logo} alt="Logo" />
      <h1 className="header-text">React Investment Calculator</h1>
    </header>
  )
}