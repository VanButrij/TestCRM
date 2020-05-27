-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Май 27 2020 г., 17:47
-- Версия сервера: 10.3.13-MariaDB-log
-- Версия PHP: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `workers`
--

-- --------------------------------------------------------

--
-- Структура таблицы `workers_store`
--

CREATE TABLE `workers_store` (
  `id` int(11) NOT NULL,
  `showUser` tinyint(1) NOT NULL,
  `preview` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '-',
  `firstName` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '-',
  `lastName` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '-',
  `dateOfBirth` date NOT NULL DEFAULT current_timestamp(),
  `position` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '-',
  `remoteWorking` varchar(1) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `city` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '-',
  `street` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '-',
  `house` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '-',
  `apartment` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '-'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `workers_store`
--

INSERT INTO `workers_store` (`id`, `showUser`, `preview`, `firstName`, `lastName`, `dateOfBirth`, `position`, `remoteWorking`, `city`, `street`, `house`, `apartment`) VALUES
(12, 1, '', 'Иван', 'Рокотов', '1999-05-25', 'Разработчик', '0', 'СПБ', 'Гладышева', '5', '65'),
(13, 1, '', 'Василий', 'Выхин', '1998-06-12', 'Тестировщик', '1', 'МСК', 'Старокачаловская', '30', '136'),
(14, 1, '', 'Максим', 'Корнев', '1999-11-23', 'Разработчик', '1', 'СПБ', 'Крестовский пр-т.', '12', '2'),
(15, 1, '', 'Валентин', 'Родин', '1997-02-20', 'Верстальщик', '0', 'СПБ', 'Дибуновская', '45', '12'),
(16, 1, '', 'Вениамин', 'Торский', '1999-01-31', 'Разработчик', '1', 'Мытищи', 'Строителей', '3', '22'),
(17, 1, '', 'Андрей', 'Комков', '2000-09-27', 'Верстальщик', '0', 'Минск', 'Корнева', '35', '76'),
(18, 1, '', 'Олег', 'Пахарь', '1998-08-04', 'Менеджер', '1', 'Нижний Новгород', 'Победы', '8', '54'),
(19, 0, '', 'Илья', '', '1998-07-10', 'Тестировщик', '1', 'Тагил', 'Красная', '3', '12'),
(20, 1, '', 'Карим', 'Шахнадзе', '1999-04-23', 'Верстальщик', '1', 'Пенза', 'Красных Комаров', '4', '12');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `workers_store`
--
ALTER TABLE `workers_store`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `workers_store`
--
ALTER TABLE `workers_store`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
