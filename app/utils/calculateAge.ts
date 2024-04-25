export const calculateAge = (dobDay: number, dobMonth: number, dobYear: number): number => {
    const today = new Date();
    const birthDate = new Date(dobYear, dobMonth - 1, dobDay);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}