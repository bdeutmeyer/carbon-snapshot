export default function formatDate(hyphenatedDate) {
    const slashDate = new Date(hyphenatedDate).toLocaleDateString(undefined, { timeZone: 'Asia/Bangkok' });
    return slashDate
  }