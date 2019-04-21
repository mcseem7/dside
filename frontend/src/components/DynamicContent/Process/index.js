import React, { Component, Fragment } from 'react'
import './index.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Translate from 'translate-components'
import ReactDOM from 'react-dom';
import { reactTranslateChangeLanguage } from 'translate-components'
import Helmet from 'react-helmet-async'
import Footer from '../../Basic/Footer';
import Header from '../../Basic/Header';
import ReactFullpage from '@fullpage/react-fullpage';

const SEL = 'custom-section';
const anchors = ['analytics', 'design', 'development', 'integration', 'testing'];
const tooltips = ['01 Analize', 'Design', 'Development', 'Integration', 'Testing'];
const SECTION_SEL = `.${SEL}`;
const originalColors = ['transparent', 'transparent', 'transparent','transparent'];
const pluginWrapper = () => {
  /**
   * require('fullpage.js/vendors/scrolloverflow'); // Optional. When using scrollOverflow:true
   */
};
export default class Process extends Component {



  constructor(props) {
    super(props);
    this.state = {
      firstSlide: '0',
      sectionsColor: [...originalColors],
      fullpages: [
        {
          h2: 'Analytics',
          tooltip: '01',
          maintext: 'The success of any website or mobile application is a clear understanding of user needs, system limitations and business objectives. Detailed business analysis helps us to choose the optimal solution that meets the needs of the target audience.',
          wedoitem1: 'Market analysis',
          wedoitem2: 'Competitor analysis',
          wedoitem3: 'Description of the functional',
          wedoitem4: 'Users analysis',
          wedoitem5: 'Project specification',
          teamitem1: 'Business analyst',
          teamitem2: 'Project manager',
        },
        {
          h2: 'Design',
          tooltip: '02',
          maintext: 'Spectacular branding will help you to stand out in the market, and an intuitive interface to increase user loyalty and involvement. We also develop infographics, illustrations and other graphic content, which guarantees the uniqueness of your content.',
          wedoitem1: 'Site structure and map',
          wedoitem2: 'Logo and corporate identity',
          wedoitem3: 'Responsive Web Design',
          wedoitem4: 'Website prototypes',
          wedoitem5: 'Printed and promo products',
          wedoitem6: 'Motion graphics',
          teamitem1: 'Art Director',
          teamitem2: 'UX/UI designer',
          teamitem3: 'Graphic designer',
        },
        {
          h2: 'Development',
          tooltip: '03',
          maintext: 'Designing a system architecture and writing code is a key step in creating any product. We create highly scalable solutions that work reliably under heavy loads. Our team also specializes in creating custom animation effects that are an integral part of a modern promotional website.',
          wedoitem1: 'System architecture design',
          wedoitem2: 'Backend on CMS',
          wedoitem3: 'Custom backend',
          wedoitem4: 'Frontend',
          wedoitem5: 'Layout',
          teamitem1: 'Systems architect',
          teamitem2: 'Full-stack dev',
          teamitem3: 'Frontend dev',
          teamitem4: 'Backend dev',
          teamitem5: 'Markup',
        },
        {
          h2: 'Integration',
          tooltip: '04',
          maintext: 'For successful and timely launch of any system, it is necessary to carry out full synchronization of the site or application with the CRM client. Correct synchronization performed ensures the safety and correctness of data and the speed of its processing by the business.',
          wedoitem1: 'CRM & ERP Systems',
          wedoitem2: 'Backend on CMS',
          wedoitem3: 'Payment systems',
          wedoitem4: 'Delivery systems',
          wedoitem5: 'Accounting systems',
          wedoitem6: 'Other integrations',
          teamitem1: 'Full-stack dev',
          teamitem2: 'Backend dev',
        },
        {
          h2: 'Testing',
          tooltip: '05',
          maintext: 'We do not like to rewrite the code, so we are testing at the end of each sprint. Risk prevention saves both money and time.',
          wedoitem1: 'Manual testing',
          wedoitem2: 'Automatic testing',
          wedoitem3: 'A / B testing',
          wedoitem4: 'Load testing',
          wedoitem5: 'Security testing',
          teamitem1: 'QA Automation Engineer',
          teamitem2: 'QA Engineer',
        },
        {
          h2: 'Launching',
          tooltip: '06',
          maintext: 'Launch is one of the most important stages in the life of any product. We carry out a full cycle - from selecting and buying a domain to setting up a server update. Full technical support at all stages.',
          wedoitem1: 'Domain and hosting',
          wedoitem2: 'Cloud storage',
          wedoitem3: 'Server scaling',
          wedoitem4: 'Setting up a version control system',
          teamitem1: 'System Administrator',
          teamitem2: 'Devops Engineer',
        },
        {
          h2: 'Marketing',
          tooltip: '07',
          maintext: 'It is not enough to create a product, you still need to competently submit it to users. We help in growth, increase performance, make the product recognizable and loved.',
          wedoitem1: 'SEO',
          wedoitem2: 'CPA marketing',
          wedoitem3: 'Display advertising',
          wedoitem4: 'Contextual marketing',
          wedoitem5: 'Email marketing',
          wedoitem6: 'User Behavior Analysis (GA)',
          teamitem1: 'SEO Specialist',
          teamitem2: 'Email Marketing Specialist',
          teamitem3: 'Copywriter',
        },
        {
          h2: 'Support',
          tooltip: '08',
          maintext: 'We ensure the stable operation of the project without failures and crashes, we introduce new functionality and updates, update security patches, keep all databases up to date.',
          wedoitem1: 'Bug fixes',
          wedoitem2: 'Design update',
          wedoitem3: 'Layout update',
          wedoitem4: 'Security patches update',
          teamitem1: 'All the above',
        }
      ],
    };
  }

  onLeave(origin, destination, direction) {
    console.log('onLeave', { origin, destination, direction});
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  }
  afterLoad(origin, destination, direction) {
    if(destination.index !== 0){
                   this.setState(
                       {
                         firstSlide: destination.index,
                       }
                   );
    } else {
                  this.setState(
                       {
                         firstSlide: '0',
                       }
                   );
    }
    console.log("After load: " + destination.index);
  }
  handleChangeColors() {
    const newColors =
      this.state.sectionsColor[0] === 'yellow'
        ? [...originalColors]
        : ['yellow', 'blue', 'white'];
    this.setState({
      sectionsColor: newColors,
    });
  }

  handleAddSection() {
    this.setState(state => {
      const { fullpages } = state;
      const { length } = fullpages;
      fullpages.push({
        h2: `section ${length + 1}`,
        id: Math.random(),
      });

      return {
        fullpages: [...fullpages],
      };
    });
  }

  handleRemoveSection() {
    this.setState(state => {
      const { fullpages } = state;
      const newPages = [...fullpages];
      newPages.pop();

      return { fullpages: newPages };
    });
  }

   render() {
    const { fullpages } = this.state;
     const { firstSlide } = this.state;
    if (!fullpages.length) {
      return null;
    }

    const Menu = () => (
      <div
        className="menu"
        style={{
          position: 'fixed',
          top: 0,
          zIndex: 100,
        }}
      >

      </div>
    );

    return (

      <div className={'name' + firstSlide}>
        <Menu />
        <ReactFullpage
          debug /* Debug logging */
          navigation
          showActiveTooltip
          navigationPosition='left'
          lockAnchors='true'
          anchors={anchors}
          sectionSelector={SECTION_SEL}
          onLeave={this.onLeave.bind(this)}
          afterLoad={this.afterLoad.bind(this)}
          sectionsColor={this.state.sectionsColor}
          pluginWrapper={pluginWrapper}
          render={comp => (
            <ReactFullpage.Wrapper>
              {fullpages.map(({ h2, maintext, tooltip, wedoitem1, wedoitem2, wedoitem3, wedoitem4, wedoitem5, wedoitem6, teamitem1, teamitem2, teamitem3, teamitem4, teamitem5, teamitem6 }) => (
                <div key={h2} data-tooltip={tooltip} className="custom-section controller">
                  <div className="section-wrapper">
                  <div className="section-top">
                    <h2><Translate>{h2}</Translate></h2>
                    <span><Translate>{maintext}</Translate></span>
                  </div>
                  <div className="section-bottom">
                      <div className="section-left">
                      <h3><Translate>We Do</Translate></h3>
                      <ul className="wedo">
                        <li>{wedoitem1}</li>
                        <li>{wedoitem2}</li>
                        <li>{wedoitem3}</li>
                        <li>{wedoitem4}</li>
                        <li>{wedoitem5}</li>
                        <li>{wedoitem6}</li>
                      </ul>
                      </div>
                      <div className="section-right">
                      <h3><Translate>Team</Translate></h3>
                      <ul className="team">
                        <li>{teamitem1}</li>
                        <li>{teamitem2}</li>
                        <li>{teamitem3}</li>
                        <li>{teamitem4}</li>
                        <li>{teamitem5}</li>
                        <li>{teamitem6}</li>
                      </ul>
                      </div>
                      </div>
                  </div>
                </div>

              ))}
            </ReactFullpage.Wrapper>
          )}
        />
      </div>
    );
  }
}
