import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavBar,
        showRightNavBar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeShowContent = () => {
        onToggleShowContent()
      }

      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div>
          <div className="layout-controls-container">
            <h1 className="layout-heading">Layout</h1>
            <ul className="checkboxes-container">
              <li className="checkbox-container">
                <input
                  type="checkbox"
                  id="content"
                  checked={showContent}
                  onChange={onChangeShowContent}
                />
                <label htmlFor="content" className="label-name">
                  Content
                </label>
              </li>
              <li className="checkbox-container">
                <input
                  type="checkbox"
                  id="leftNavBar"
                  checked={showLeftNavBar}
                  onChange={onChangeLeftNavbar}
                />
                <label htmlFor="leftNavBar" className="label-name">
                  Left Navbar
                </label>
              </li>
              <li className="checkbox-container">
                <input
                  type="checkbox"
                  id="rightNavBar"
                  checked={showRightNavBar}
                  onChange={onChangeRightNavbar}
                />
                <label htmlFor="content" className="label-name">
                  Right Navbar
                </label>
              </li>
            </ul>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
