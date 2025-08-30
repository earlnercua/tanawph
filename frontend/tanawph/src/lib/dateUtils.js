export function formatDate(date){
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
}

export function yearsFromNow(date) {
    const now = new Date();
    let years = now.getFullYear() - date.getFullYear();
    // Adjust if the current date is before the given date's month/day
    const hasNotHadBirthdayThisYear =
        now.getMonth() < date.getMonth() ||
        (now.getMonth() === date.getMonth() && now.getDate() < date.getDate());
    if (hasNotHadBirthdayThisYear) {
        years--;
    }
    return years;
}