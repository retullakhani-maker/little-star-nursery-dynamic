-- ============================================================
--  Little Star Nursery — Database Setup Script
--  Run this in SSMS / Azure Data Studio against your SQL Server
-- ============================================================

-- 1. Create database
IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = N'LittleStarDB')
BEGIN
    CREATE DATABASE LittleStarDB;
END
GO

USE LittleStarDB;
GO

-- ============================================================
-- 2. Branches Table
-- ============================================================
IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'Branches')
BEGIN
    CREATE TABLE Branches (
        -- Primary Key
        BranchId        INT             IDENTITY(1,1)   NOT NULL    CONSTRAINT PK_Branches PRIMARY KEY,

        -- Branch Details
        Name            NVARCHAR(200)   NOT NULL,
        NameGujarati    NVARCHAR(200)   NOT NULL    DEFAULT '',
        Address         NVARCHAR(500)   NOT NULL    DEFAULT '',
        AddressGujarati NVARCHAR(500)   NOT NULL    DEFAULT '',
        Phone           NVARCHAR(50)    NOT NULL    DEFAULT '',
        MapLink         NVARCHAR(1000)  NOT NULL    DEFAULT '',
        Badge           NVARCHAR(100)   NOT NULL    DEFAULT '',
        BadgeGujarati   NVARCHAR(100)   NOT NULL    DEFAULT '',
        ColorClass      NVARCHAR(50)    NOT NULL    DEFAULT '',
        IsActive        BIT             NOT NULL    DEFAULT 1,
        SortOrder       INT             NOT NULL    DEFAULT 0,

        -- ── Audit Columns (common to every table) ──────────────
        CreatedBy       NVARCHAR(100)   NOT NULL    DEFAULT 'system',
        CreatedAt       DATETIME2       NOT NULL    DEFAULT GETDATE(),
        UpdatedBy       NVARCHAR(100)   NULL,
        UpdatedAt       DATETIME2       NULL,
        DeletedBy       NVARCHAR(100)   NULL,
        DeletedAt       DATETIME2       NULL,
        IsDeleted       BIT             NOT NULL    DEFAULT 0
    );
    PRINT 'Table [Branches] created.';
END
ELSE
BEGIN
    PRINT 'Table [Branches] already exists — skipped.';
END
GO

-- ============================================================
-- 3. Seed Data — 4 existing branches
-- ============================================================
IF NOT EXISTS (SELECT 1 FROM Branches)
BEGIN
    INSERT INTO Branches
        (Name, NameGujarati, Address, AddressGujarati, Phone, MapLink, Badge, BadgeGujarati, ColorClass, IsActive, SortOrder, CreatedBy)
    VALUES
    (
        'Main Branch (Hirabaugh)',
        N'મેઈન બ્રાન્ચ (હિરાબાગ)',
        '12/A, Shriramnagar Society, Near Hirabaugh Circle, Varachha Road',
        N'12/A, શ્રીરામનગર સોસાયટી, આદર્શ સોસાયટીની બાજુમાં, હિરાબાગ સર્કલ પાસે, હિરાબાગ ટુ જનતા રોડ',
        '+91 81560 50010',
        'https://www.google.com/maps/dir//Little+Star+Nursery+School,+Varachha+Main+Road,+Ram+Nagar,+Hirabaugh,+Surat,+Gujarat/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be04f7b05133ddb:0x34bdeacc8d2f63f0?sa=X&ved=1t:3061&ictx=111',
        'Main Branch',
        N'મેઈન બ્રાન્ચ',
        'bcard-1',
        1, 1,
        'system'
    ),
    (
        'Branch No. 2 (Nana Varachha)',
        N'બ્રાન્ચ નં. ૨ (નાના વરાછા)',
        '110, Krushnakunj Society, Near Aashadeep School-1, Simada Naka',
        N'110, કૃષ્ણકુંજ સોસાયટી, આશાદીપ સ્કુલ-1ની નજીક, સીમાડા નાકાની પાછળ, નાના વરાછા',
        '+91 95376 91700',
        'https://www.google.com/maps/dir/21.2148077,72.8633633/LITTLE+STAR+NURSERY,+14,+AKSHARDHAM+SOCIETY,+SARTHANA+JAKAT,+opp.+NAVJIVAN+HOTEL,+Surat,+Gujarat+395013/@21.2245353,72.8439586,16957m/data=!3m2!1e3!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3be045747e7f6e43:0x5a130b564a78ba40!2m2!1d72.9075099!2d21.2341987!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDMxMC4wIKXMDSoASAFQAw%3D%3D',
        '',
        N'',
        'bcard-2',
        1, 2,
        'system'
    ),
    (
        'Branch No. 3 (Utran)',
        N'બ્રાન્ચ નં. ૩ (ઉત્રાણ)',
        '101, First Floor, Angel Square, Near VIP Circle, Utran',
        N'101, ફર્સ્ટ સ્લોર, એન્જલ સ્ક્વેર, રોયલ સ્ક્વેરની બાજુમાં, સિલ્વર મેક્ઝિમાની સામે, વી.આઈ.પી. સર્કલ પાસે, ઉત્રાણ',
        '+91 95867 17500',
        'https://www.google.com/maps/dir//Little+Star+Nursery+school,+FF%2F101,+Angel+Square,+opp.+SILVER+MAXIMA,+nr.+VIP+Circle,+Uttran,+Surat,+Gujarat+394105/@21.2337597,72.7817746,33912m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3be04f57fb4ed23f:0x45696c310df1e26b!2m2!1d72.8641899!2d21.2344799!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDMxMC4wIKXMDSoASAFQAw%3D%3D',
        '',
        N'',
        'bcard-3',
        1, 3,
        'system'
    ),
    (
        'Branch No. 4 (Sarthana)',
        N'બ્રાન્ચ નં. ૪ (સરથાણા)',
        '1, RadheKrishna Society, Behind Shyamdham Mandir, Sarthana Jakatnaka',
        N'1, રાધે ક્રિષ્ના સોસાયટી, સંકલ્પ રેસીડેન્સીની સામે, શ્યામધામ મંદિરની પાછળ, પરમહંસ સ્કૂલની સામે, સરથાણા જકાતનાકા આગળ',
        '+91 97268 33009',
        'https://www.google.com/maps/dir//little+star+nursery+school+akshardham/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be045747e7f6e43:0x5a130b564a78ba40?sa=X&ved=1t:3061&ictx=111',
        '',
        N'',
        'bcard-4',
        1, 4,
        'system'
    );
    PRINT '4 branches seeded successfully.';
END
ELSE
BEGIN
    PRINT 'Branches already have data — seed skipped.';
END
GO

-- ============================================================
-- 4. Users Table
-- ============================================================
IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'Users')
BEGIN
    CREATE TABLE Users (
        -- Primary Key
        UserId          INT             IDENTITY(1,1)   NOT NULL    CONSTRAINT PK_Users PRIMARY KEY,

        -- Identity
        Username        NVARCHAR(100)   NOT NULL    CONSTRAINT UQ_Users_Username UNIQUE,
        FullName        NVARCHAR(200)   NOT NULL,
        Email           NVARCHAR(200)   NOT NULL    CONSTRAINT UQ_Users_Email UNIQUE,
        Phone           NVARCHAR(50)    NULL,

        -- Auth
        PasswordHash    NVARCHAR(500)   NOT NULL,   -- Hashed password (bcrypt / SHA-256)
        PasswordSalt    NVARCHAR(200)   NULL,        -- Salt (if applicable)

        -- Role & Branch
        Role            NVARCHAR(50)    NOT NULL    DEFAULT 'Staff',
        -- Roles: SuperAdmin | Admin | BranchAdmin | Staff
        BranchId        INT             NULL        CONSTRAINT FK_Users_Branch FOREIGN KEY REFERENCES Branches(BranchId),

        -- Status
        IsActive        BIT             NOT NULL    DEFAULT 1,
        LastLoginAt     DATETIME2       NULL,

        -- ── Audit Columns ──────────────────────────────────────
        CreatedBy       NVARCHAR(100)   NOT NULL    DEFAULT 'system',
        CreatedAt       DATETIME2       NOT NULL    DEFAULT GETDATE(),
        UpdatedBy       NVARCHAR(100)   NULL,
        UpdatedAt       DATETIME2       NULL,
        DeletedBy       NVARCHAR(100)   NULL,
        DeletedAt       DATETIME2       NULL,
        IsDeleted       BIT             NOT NULL    DEFAULT 0
    );
    PRINT 'Table [Users] created.';
END
ELSE
BEGIN
    PRINT 'Table [Users] already exists — skipped.';
END
GO

-- ============================================================
-- 5. Seed Data — Default Admin User
--    Username: admin  |  Password: admin@123 (SHA-256 hashed)
-- ============================================================
IF NOT EXISTS (SELECT 1 FROM Users)
BEGIN
    INSERT INTO Users
        (Username, FullName, Email, Phone, PasswordHash, PasswordSalt, Role, BranchId, IsActive, CreatedBy)
    VALUES
    (
        'admin',
        'Super Administrator',
        'admin@littlestar.com',
        NULL,
        -- SHA-256 hash of 'admin@123' — update this with proper hash in production
        '240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9',
        NULL,
        'SuperAdmin',
        NULL,   -- SuperAdmin not tied to any single branch
        1,
        'system'
    );
    PRINT 'Default admin user seeded (Username: admin, Password: admin@123).';
END
ELSE
BEGIN
    PRINT 'Users already have data — seed skipped.';
END
GO

PRINT 'LittleStarDB setup complete! Tables: Branches, Users';
GO
