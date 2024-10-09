import { Remarkable } from 'remarkable';

const md = new Remarkable();

export const MarkdownPreview = ({markdown}:{markdown:string}) => {
  return (
    <div dangerouslySetInnerHTML={{__html:md.render(markdown)}}>
    </div>
  )
}
