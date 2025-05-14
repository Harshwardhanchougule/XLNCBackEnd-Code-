import { Helmet } from 'react-helmet';

interface MetaTagsProps {
  title: string;
  description: string;
}

const MetaTags = ({ title, description }: MetaTagsProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default MetaTags;