import TooltipProvider from '../../context/TooltipProvider';
import { skills } from '../../data/skills';
import SkillList from './components/SkillList';

const Skills = (): JSX.Element => {
  return (
    <TooltipProvider>
      <SkillList skills={skills} />
    </TooltipProvider>
  );
};

export default Skills;
