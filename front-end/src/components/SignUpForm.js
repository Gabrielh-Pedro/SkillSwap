import React, { useState } from 'react';
import './styles/SignUpForm.css'

const SignUpForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [errors, setErrors] = useState({});
    const [selectedSkill, setSelectedSkill] = useState('');
    const [skills, setSkills] = useState([]);
    const [inputSkill, setInputSkill] = useState('');

    const validateUsername = (value) => {
        const formattedValue = value.charAt(0).toUpperCase() + value.slice(1);
        setUsername(formattedValue);

        const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{2,}$/;
        setErrors((prevErrors) => ({
            ...prevErrors,
            username: regex.test(formattedValue) ? '' : 'O nome de usuário deve conter pelo menos uma letra maiúscula e um número.',
        }));
    };

    const validatePassword = (value) => {
        setPassword(value);

        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        setErrors((prevErrors) => ({
            ...prevErrors,
            password: regex.test(value) ? '' : 'A senha deve ter pelo menos 6 caracteres alfanuméricos.',
        }));
    };

    const handleConfirmPassword = (value) => {
        setConfirmPassword(value);
        setErrors((prevErrors) => ({
            ...prevErrors,
            confirmPassword: value === password ? '' : 'As senhas não coincidem.',
        }));
    };

    const handleSkillAddition = () => {
        if (inputSkill && !skills.includes(inputSkill)) {
            setSkills([...skills, inputSkill]);
            setInputSkill('');
        }
    };

    const handleSkillRemoval = (skill) => {
        setSkills(skills.filter((s) => s !== skill));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errors.username && !errors.password && !errors.confirmPassword && termsAccepted) {
            alert('Conta criada com sucesso!');
            // Aqui você pode adicionar a lógica para enviar os dados para o backend.
        } else {
            alert('Por favor, corrija os erros antes de continuar.');
        }
    };

    return (
        <div className='geralArea'>
            <h2>Bem-vindo(a) á <span className='bolder'>SkillSwap</span>, vamos criar uma conta!</h2>
            <p>Registre seus dados para começar</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="Crie um nome de usuário"
                        value={username}
                        onChange={(e) => validateUsername(e.target.value)}
                        required
                    />
                    {errors.username && <span id='error' className="error">{errors.username}</span>}
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Crie sua senha"
                        value={password}
                        onChange={(e) => validatePassword(e.target.value)}
                        required
                    />
                    {errors.password && <span id='error' className="error">{errors.password}</span>}
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Confirme sua senha"
                        value={confirmPassword}
                        onChange={(e) => handleConfirmPassword(e.target.value)}
                        required
                        style={{ borderColor: errors.confirmPassword ? 'red' : confirmPassword ? 'green' : '' }}
                    />
                    {errors.confirmPassword && <span id='error' className="error">{errors.confirmPassword}</span>}
                </div>

                {/* Select para habilidades principais */}
                <div>
                    <select value={selectedSkill} onChange={(e) => setSelectedSkill(e.target.value)} required>
                        <option value="">Escolha uma habilidade</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Front-end">Front-end</option>
                        <option value="Back-end">Back-end</option>
                        <option value="DevOps">DevOps</option>
                        <option value="Mobile Development">Desenvolvimento Mobile</option>
                    </select>
                </div>

                {/* Input para adicionar skills */}
                <div>
                    <input
                        type="text"
                        placeholder="Adicione uma skill (ex: CSS, HTML)"
                        value={inputSkill}
                        onChange={(e) => setInputSkill(e.target.value)}
                    />
                    <button className='buttonAll' type="button" onClick={handleSkillAddition}>
                        Adicionar Skill
                    </button>
                </div>

                {/* Lista de skills adicionadas */}
                <div>
                    <ul>
                        {skills.map((skill, index) => (
                            <li key={index}>
                                {skill} <button type="button" onClick={() => handleSkillRemoval(skill)}>Remover</button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="toggle-container">
                    <input
                        type="checkbox"
                        id="termsSwitch"
                        className="toggle-switch"
                        checked={termsAccepted}
                        onChange={(e) => setTermsAccepted(e.target.checked)}
                    />
                    <label htmlFor="termsSwitch" className="toggle-label">
                        <span className="toggle-ball"></span>
                    </label>
                    <span>Aceito os termos de contrato</span>
                </div>

                <button className='buttonAll' type="submit" disabled={!termsAccepted}>
                    Criar Conta
                </button>
            </form>
        </div>
    );
};

export default SignUpForm;
