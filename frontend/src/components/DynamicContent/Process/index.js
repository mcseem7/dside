import React, { Component } from 'react'
import './index.css'
import ReactFullpage from '@fullpage/react-fullpage';
import Translate from 'translate-components'
import { reactTranslateChangeLanguage } from 'translate-components'
import Helmet from 'react-helmet-async'
const SEL = 'custom-section';
const anchors = ['analytics', 'design', 'development', 'integration', 'testing'];
const SECTION_SEL = `.${SEL}`;
const originalColors = ['transparent', 'transparent', 'transparent','transparent'];
const pluginWrapper = () => {
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
          maintext: 'We thoroughly study the tasks of the business, the desires and needs of users and formulate the strategy of optimal solutions for every specific project.',
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
          maintext: 'We create a spectacular design that performs specific tasks. Experience is in every form, and the message for your client’s brain to act is in every color.',
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
          maintext: 'Admit it, speed is important. Especially when your client has an average of three seconds to decide. That is why our applications work instantly.',
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
          maintext: 'We connect existing services and applications that send or receive data from the Internet. We ensure the security of these connections.',
          wedoitem1: 'CRM & ERP Systems',
          wedoitem2: 'Payment systems',
          wedoitem3: 'Delivery systems',
          wedoitem4: 'Accounting systems',
          wedoitem5: 'Other integrations',
          teamitem1: 'Full-stack dev',
          teamitem2: 'Backend dev',
        },
        {
          h2: 'Testing',
          tooltip: '05',
          maintext: 'Nobody likes to do the work twice, so we test our code at every stage of development. Launching a holistic product in alert state.',
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
          maintext: 'We do not leave our customers to fend for themselves after the end of the development, and teach how to use the tools effectively.',
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
          maintext: 'After creating and launching a project, we provide a growth strategy, as well as making it recognizable and beloved among your customers.',
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
          maintext: 'We ensure the stable operation of the project without failures and errors, as well as update all security patches.',
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
   componentDidMount() {
    reactTranslateChangeLanguage.bind(this, localStorage.getItem("lang"))();
    window.scrollTo(0, 0);
    }
   componentDidUpdate() {
    reactTranslateChangeLanguage.bind(this, localStorage.getItem('lang'))()
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

    return (
      <div className={'name' + firstSlide}>
             <Helmet>
            <title>Process</title>
          </Helmet>
        <ReactFullpage
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
                        <li><Translate>{wedoitem1}</Translate></li>
                        <li><Translate>{wedoitem2}</Translate></li>
                        <li><Translate>{wedoitem3}</Translate></li>
                        <li><Translate>{wedoitem4}</Translate></li>
                        <li><Translate>{wedoitem5}</Translate></li>
                        <li><Translate>{wedoitem6}</Translate></li>
                      </ul>
                      </div>
                      <div className="section-right">
                      <h3><Translate>Team</Translate></h3>
                      <ul className="team">
                        <li><Translate>{teamitem1}</Translate></li>
                        <li><Translate>{teamitem2}</Translate></li>
                        <li><Translate>{teamitem3}</Translate></li>
                        <li><Translate>{teamitem4}</Translate></li>
                        <li><Translate>{teamitem5}</Translate></li>
                        <li><Translate>{teamitem6}</Translate></li>
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
