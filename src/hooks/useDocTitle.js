import { useEffect } from 'react';

const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - Retro Beats`;
        } else {
            document.title = 'Retro Beats | The Perfect Audio Store';
        }
    }, [title]);

    return null;
};

export default useDocTitle;
