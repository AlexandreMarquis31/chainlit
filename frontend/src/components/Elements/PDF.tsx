import { type IPdfElement } from 'client-types/';

interface Props {
  element: IPdfElement;
}

const PDFElement = ({ element }: Props) => {
  if (!element.url) {
    return null;
  }
  let url = element.page ? `${element.url}#page=${element.page}` : `${element.url}#page=0`;

  url = element.search ? `${url}&search=${element.search}` : `${url}&search=jack`;
  return (
    <iframe
      className={`${element.display}-pdf h-full w-full border-none`}
      src={url}
    ></iframe>
  );
};

export { PDFElement };
