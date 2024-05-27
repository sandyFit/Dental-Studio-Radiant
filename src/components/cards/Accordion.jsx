import React, { useState } from 'react';
import '../../assets/css/acc.css'; // Assuming you have your CSS in this file

const Tab = ({ title, content, isChecked, onChange }) => {
  const tabId = `rad-${title.replace(/\s+/g, '-')}`;

  return (
    <li>
      <input
        id={tabId}
        type="radio"
        name="tabControlName"
        checked={isChecked}
        onChange={onChange}
      />
      <label htmlFor={tabId}>
        <div>{title}</div>
      </label>
      <div className="accslide">
        <div className="content">{content}</div>
      </div>
    </li>
  );
};

const Accordion = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const tabs = [
    {
      title: 'Just keep going with longer text',
      content: (
        <>
          <h1>Just keep going with longer text</h1>
          <p>Lorem ipsum...</p>
        </>
      ),
    },
    {
      title: 'Second panel',
      content: (
        <>
          <h1>Second panel</h1>
          <p>Lorem ipsum...</p>
        </>
      ),
    },
    {
      title: 'Third panel',
      content: (
        <>
          <h1>Third panel</h1>
          <p>Lorem ipsum...</p>
        </>
      ),
    },
    {
      title: 'Fourth panel',
      content: (
        <>
          <h1>Fourth panel</h1>
          <p>Lorem ipsum...</p>
        </>
      ),
    },
  ];

  return (
    <ul>
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          title={tab.title}
          content={tab.content}
          isChecked={currentTab === index}
          onChange={() => setCurrentTab(index)}
        />
      ))}
    </ul>
  );
};

export default Accordion;
