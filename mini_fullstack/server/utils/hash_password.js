import bcrypt from 'bcrypt'

const hashPassword = password => {
    const salt = bcrypt.genSaltSync(); // по умолчанию 10, минимум 4
    return bcrypt.hashSync(password, salt)
}

const comparePassword = (raw, hash) => bcrypt.compareSync(raw, hash);

export { hashPassword, comparePassword }