import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function SkillCard({ title, proficiency, icon: Icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <Card>
        <CardHeader className="flex flex-row items-center space-x-4 pb-2">
          <Icon className="h-8 w-8 text-primary" />
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={proficiency} className="h-2" />
          <span className="text-sm text-muted-foreground mt-2 block">
            {proficiency}% Proficiency
          </span>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default SkillCard;