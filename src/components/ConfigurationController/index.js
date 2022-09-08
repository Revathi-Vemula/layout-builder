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
            <div className="checkboxes-container">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="content"
                  checked={showContent}
                  onChange={onChangeShowContent}
                />
                <label htmlFor="content" className="label-name">
                  Content
                </label>
              </div>
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="leftNavBar"
                  checked={showLeftNavBar}
                  onChange={onChangeLeftNavbar}
                />
                <label htmlFor="leftNavbar" className="label-name">
                  Left Navbar
                </label>
              </div>
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="rightNavBar"
                  checked={showRightNavBar}
                  onChange={onChangeRightNavbar}
                />
                <label htmlFor="rightNavBar" className="label-name">
                  Right Navbar
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
