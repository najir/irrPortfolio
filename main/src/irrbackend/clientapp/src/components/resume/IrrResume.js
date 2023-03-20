import ExperienceInfo from './components/ExperienceInfo';
import * as UserInfo from './components/UserInfo';
import SkillInfo from './components/SkillsInfo';
import OtherInfo from './components/OtherInfo';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './resume.css'

function IrrResume() {
  return (
    <div className = "initial">
      <div className="resume">
        <header>
          <UserInfo.default />
        </header>
        <div class="flex-container">
          <div id="leftBox">
            <UserInfo.ProfileWrapper />
            <SkillInfo />
            <OtherInfo />
          </div>
          <div id="mainBox">
            <ExperienceInfo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IrrResume;
