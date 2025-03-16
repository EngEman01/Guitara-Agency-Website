export const fetchVisitorCounts = async () => {
    try {
      const response = await fetch('/visitors.php'); // رابط ملف PHP
      if (!response.ok) {
        throw new Error('خطأ أثناء جلب بيانات الزوار');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return {};
    }
  };
  