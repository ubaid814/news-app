const useNavigation = (url: string) => {
    const handleNavigation = () => {
      window.open(url, "_blank");
    };
  
    return handleNavigation;
};

export default useNavigation;